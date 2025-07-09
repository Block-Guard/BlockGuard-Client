import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage/HomePage";
import FraudLandingPage from "../pages/FraudLandingPage/FraudLandingPage";
import FraudSurveyPage from "../pages/FraudSurveyPage/FraudSurveyPage";
import FraudLayout from "../layouts/FraudLayout";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/fraud-analysis",
    element: <FraudLayout />,
    children: [
      {
        path: "",
        element: <FraudLandingPage />,
      },
      {
        path: "survey",
        element: <FraudSurveyPage />,
      },
    ],
  },
]);

export default router;
