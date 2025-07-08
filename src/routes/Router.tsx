import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
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
        path: '/home',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
        ]
    },


])

export default router