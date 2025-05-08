# Food App - MERN Stack Restaurant Website

This repository contains the source code for a production-ready restaurant website built using the **MERN stack** (MongoDB, Express, React, Node.js). The project guides you through creating a scalable, feature-rich application with modern tools and best practices.

## Features

- **TypeScript**: Ensures type safety for robust and maintainable code.
- **MongoDB Schema Design**: Structured database for efficient data management.
- **ShadCN UI & Tailwind CSS**: Modern, responsive, and beautiful user interface.
- **Advanced Authentication**: Includes login, signup, logout, 6-digit token-based verification, and password recovery.
- **Role-Based Accounts**: Securely manage admin and user roles.
- **Zod**: Robust schema validation and error handling.
- **Zustand**: Lightweight and scalable state management.
- **Stripe Payment Gateway**: Secure online payment processing.
- **Stripe Webhooks**: Real-time event handling for payment updates.
- **Mailtrap**: Email sending and testing for authentication and notifications.
- **Advanced Search**: Powerful search and filtering for restaurants and menus.
- **Loading Skeletons**: Elegant loading states for enhanced user experience.
- **Git & GitHub**: Version control and collaborative development.
- **Deployment**: Deployed on Render for cloud hosting.
- **Additional Features**: Light/dark mode, cart management, and order tracking.

## Tech Stack

- **Frontend**: React, TypeScript, ShadCN UI, Tailwind CSS, Zustand, React Router
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT, 6-digit token verification
- **Payment**: Stripe, Stripe Webhooks
- **Email**: Mailtrap
- **Media Storage**: Cloudinary
- **Deployment**: Render
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- MongoDB (local or Atlas)
- Stripe account for payment integration
- Mailtrap account for email testing
- Cloudinary account for image storage
- Git and GitHub account

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mishraShilpa-28/restaurant-website-mern.git
   cd restaurant-website-mern
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create `.env` files in both `root` directories with the following variables:

   ```bash
    # mongodb setup
    PORT=8080
    MONGO_URI=
    SECRET_KEY=
    FRONTEND_URL=

    # cloudinary setup
    CLOUD_NAME=
    API_KEY=
    API_SECRET=

    # mailtrap setup
    MAILTRAP_API_TOKEN=

    # stripe setup
    STRIPE_SECRET_KEY=
    STRIPE_PUBLISHABLE_KEY=

    # webhook setup
    WEBHOOK_ENDPOINT_SECRET=
   ```

4. **Build and Run the application**:

   ```bash
   npm run build 
   npm run start
   ```

5. **Access the app**:
   Open `http://localhost:3000` in your browser.

## Deployment

The app is deployed on **Render**. Follow these steps to deploy:

1. Push your code to a GitHub repository.
2. Create a new web service on Render and connect your repository.
3. Set up environment variables in Render's dashboard.
4. Deploy the backend and frontend services separately.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/yರacing: true
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
