# Hybrid Solar

A comprehensive dashboard for monitoring solar panel performance, detecting anomalies, and managing invoices. This application serves as the frontend for the Hybrid Solar management system.

## Links

- **Website:** [https://fed-4-front-end-tirangaliyanage.netlify.app/](https://fed-4-front-end-tirangaliyanage.netlify.app/)
- **Frontend Repository:** [https://github.com/Tira2003/Solar_FE](https://github.com/Tira2003/Solar_FE)
- **Backend Repository:** [https://github.com/Tira2003/Hybrid-solar-Backend](https://github.com/Tira2003/Hybrid-solar-Backend)
- **Data API Repository:** [https://github.com/Tira2003/Hybrid-Solar-data-api](https://github.com/Tira2003/Hybrid-Solar-data-api)
- **Backend URL:** [https://fed-4-back-end-tiranga.onrender.com](https://fed-4-back-end-tiranga.onrender.com)
- **API URL:** [https://hybrid-solar-data-api.onrender.com](https://hybrid-solar-data-api.onrender.com)

## Features

- **Interactive Dashboard**: Visualize real-time solar data and performance metrics using [Recharts](https://recharts.org/).
- **Anomaly Detection**: Intelligent monitoring system to identify irregularities in solar panel operations.
- **Invoice Management**: Generate and manage invoices seamlessly.
- **Secure Payments**: Integrated [Stripe](https://stripe.com/) payment processing for easy billing.
- **User Authentication**: Secure user management powered by [Clerk](https://clerk.com/).
- **Responsive Design**: Modern, responsive UI styled with [Tailwind CSS](https://tailwindcss.com/).

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Styled Components](https://styled-components.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd "Hybrid Solar Frountend"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_BACKEND_URL=your_backend_api_url
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## Deployment

This project includes a `netlify.toml` configuration file, making it ready for deployment on [Netlify](https://www.netlify.com/).

To deploy:
1. Connect your repository to Netlify.
2. Configure the build settings (Build command: `npm run build`, Publish directory: `dist`).
3. Add the required Environment Variables in the Netlify dashboard.
