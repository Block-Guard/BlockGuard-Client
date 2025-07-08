import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";
import FraudLandingPage from "../pages/FraudLandingPage/FraudLandingPage";
import MainLayout from "../layouts/MainLayout";
import FraudSurveyPage from "../pages/FraudSurveyPage/FraudSurveyPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" replace />,
        errorElement: <NotFound />,
    },
    {
        path: '/home',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
        ]
    },
    {
        path: '/fraud-analysis',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <FraudLandingPage />
            },
            {
                path: 'survey',
                element: <FraudSurveyPage />
            },
        ]
    },


])

export default router