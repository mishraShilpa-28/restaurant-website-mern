import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

// Routers and controllers
import userRoute from "./routes/user.route";
import restaurantRoute from "./routes/restaurant.route";
import menuRoute from "./routes/menu.route";
import orderRoute from "./routes/order.route";
import { stripeWebhook } from "./controller/order.controller";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// 1. Stripe webhook must receive raw body for signature verification
app.post(
  "/api/v1/order/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// 2. Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// Dynamic CORS whitelist
const whitelist = [
  process.env.FRONTEND_URL as string,
  "http://localhost:3000"
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);

// 3. API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/menu", menuRoute);
app.use("/api/v1/order", orderRoute);

// 4. Serve React client in production
app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

// 5. Connect to DB then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ MongoDB connected, server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  });
