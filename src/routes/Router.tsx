import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage/HomePage";

import EmergencyMainPage from "../pages/Emergency/EmergencyMain/EmergencyMainPage";
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

  // {
  //     path: '/auth',
  //     element: <AuthLayout />,
  //     children: [
  //         {
  //             path: '',
  //             // element: 랜딩, 로그인, 회원가입 페이지
  //         },
  //     ]
  // },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "emergency",
        element: <EmergencyMainPage />,
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
