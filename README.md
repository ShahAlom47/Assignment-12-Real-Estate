# HONEST Real Estate

HONEST Real Estate is a modern web app for real estate, providing a robust platform for buyers, sellers, and agents. It streamlines transactions and enhances user engagement with intuitive features and secure processes.

## Features

- **User Authentication**: Secure signup and login functionality for users and agents.
- **Payment Integration**: Secure payment gateway integration using Stripe for handling property transactions.
- **Role-Based Dashboards**: Separate dashboards for Users, Agents, and Admins with tailored functionalities.

## Technologies Used

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Backend**: Firebase (Authentication, Firestore), Node.js (Express.js)
- **Payment**: Stripe API for secure payment processing

## Cloning and Running Locally

To clone and run the project locally, follow these steps:

1. **Clone the Repository:**
   - `git clone https://github.com/your-username/honest-real-estate.git`
   - `cd honest-real-estate`

2. **Install Dependencies:**
   - `npm install`

3. **Set Up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Obtain Firebase config credentials and update `.env` file.
4. **Set Up MongoDB:**
   - Ensure MongoDB is installed and running locally or use a cloud-hosted service.
   - Configure MongoDB connection URI in the appropriate environment file:
     ```
     MONGODB_URI=your_mongodb_uri
     ```

