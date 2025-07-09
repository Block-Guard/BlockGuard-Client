import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage/HomePage";
import MainLayout from "../layouts/MainLayout";
import EmergencyMainPage from "../pages/Emergency/EmergencyMain/EmergencyMainPage";

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
    ],
  },
]);

export default router;
