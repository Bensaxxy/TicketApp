# 🎟️ TicketApp: Modern Support Ticket Management

## Overview
TicketApp is a dynamic single-page application built with React and Vite, designed to streamline the process of managing support tickets. It features a responsive user interface, client-side routing, mock authentication, and comprehensive CRUD operations for tickets, all stored efficiently in local storage.

## Features
*   🔐 **User Authentication**: Secure mock login and registration flows with session management.
*   ✅ **Protected Routes**: Restricts access to authenticated areas like the Dashboard and Tickets pages.
*   📊 **Interactive Dashboard**: Provides a quick overview of ticket statistics (total, open, in progress, closed).
*   📝 **Ticket Management**: Full Create, Read, Update, and Delete (CRUD) functionality for support tickets.
*   🔍 **Detailed Ticket View**: Each ticket displays its title, description, status, and priority.
*   🚀 **Fast & Responsive UI**: Built with a modern design ethos using custom CSS for an optimal user experience across devices.
*   ⚡ **Instant Notifications**: Utilizes `react-toastify` for real-time user feedback on actions.

## Getting Started

To get a copy of TicketApp up and running on your local machine, follow these steps.

### Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/Bensaxxy/TicketApp.git
cd TicketApp
```

Next, install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### Environment Variables
This project does not require specific environment variables for local development as it uses `localStorage` for data persistence and mock authentication.

## Usage

Once you have installed the dependencies, you can run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

This will start the development server, usually at `http://localhost:5173`. Open this URL in your browser.

### Application Flow:
1.  **Landing Page**: Upon visiting the root URL (`/`), you'll see a landing page with options to "Login" or "Get Started" (Sign up).
2.  **Sign Up**: Navigate to `/auth/signup`. Enter an email and password to create a mock account. The system will provide a success message and redirect you to the login page.
3.  **Login**: Navigate to `/auth/login`. Use the credentials you signed up with (or any email/password, as authentication is mocked) to log in. Upon successful login, you will be redirected to the dashboard.
4.  **Dashboard**: (`/dashboard`) Here, you can view a summary of your tickets, including total, open, in progress, and closed counts. There's also a link to "Manage Tickets" and a "Logout" button.
5.  **Manage Tickets**: (`/tickets`) This page allows you to create new tickets, or view, edit, and delete existing ones.
    *   **Create Ticket**: Click "New Ticket", fill in the form (Title, Status, Description, Priority), and click "Create".
    *   **Edit Ticket**: Click the "Edit" button on any ticket card. The form will pre-populate with the ticket's data. Make changes and click "Save".
    *   **Delete Ticket**: Click the "Delete" button on any ticket card. Confirm the action to remove the ticket.
6.  **Logout**: Click the "Logout" button on the dashboard to clear your session and return to the login page.

## Technologies Used

| Technology         | Description                                     | Link                                                |
| :----------------- | :---------------------------------------------- | :-------------------------------------------------- |
| **React**          | A JavaScript library for building user interfaces | [React.js](https://react.dev/)                      |
| **Vite**           | Next Generation Frontend Tooling                | [Vite](https://vitejs.dev/)                         |
| **React Router DOM** | Declarative routing for React                   | [React Router](https://reactrouter.com/en/main)     |
| **React Toastify** | React notification library                      | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **ESLint**         | Pluggable JavaScript linter                     | [ESLint](https://eslint.org/)                       |
| **Local Storage**  | Client-side data persistence for mock data       | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |

## Contributing
We welcome contributions to TicketApp! To contribute, please follow these steps:

1.  🍴 **Fork the repository** on GitHub.
2.  🌳 **Create a new branch** from `main` for your feature or bug fix: `git checkout -b feature/your-feature-name`.
3.  ⚙️ **Make your changes** and ensure they adhere to the project's coding style.
4.  🧪 **Test your changes** thoroughly.
5.  📝 **Write clear, concise commit messages**.
6.  ⬆️ **Push your branch** to your forked repository.
7.  ✉️ **Open a Pull Request** to the `main` branch of the original repository, describing your changes in detail.

## License
No specific license has been provided for this project.

## Author
**Bensaxxy**
*   [Twitter](https://twitter.com/your_twitter_handle) (Placeholder)
*   [LinkedIn](https://www.linkedin.com/in/your_linkedin_profile) (Placeholder)

---
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)