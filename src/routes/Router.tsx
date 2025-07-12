import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage/HomePage";

import EmergencyMainPage from "../pages/Emergency/EmergencyMain/EmergencyMainPage";
import FraudLandingPage from "../pages/FraudSurvey/FraudLandingPage/FraudLandingPage";
import FraudSurveyPage from "../pages/FraudSurvey/FraudSurveyPage/FraudSurveyPage";
import FraudLayout from "../layouts/FraudLayout";
import MainLayout from "../layouts/MainLayout";
import OrganListPage from "../pages/Emergency/OrganListPage/OrganListPage";

import EmergencyReportLandingPage from "../pages/Emergency/EmergencyReport/EmergencyReportLandingPage";
import ReportStepPage from "../pages/Emergency/EmergencyReport/ReportStepPage";

import FraudLinkNumPage from "../pages/FraudSurvey/FraudLinkNumPage/FraudLinkNumPage";
import FraudMessagePage from "../pages/FraudSurvey/FraudMessagePage/FraudMessagePage";
import FraudSituationPage from "../pages/FraudSurvey/FraudSituationPage/FraudSituationPage";
import AnalysisLoadingPage from "../pages/FraudSurvey/AnalysisLoadingPage/AnalysisLoadingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    errorElement: <NotFound />,
  },
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
      {
        path: "survey/7",
        element: <FraudLinkNumPage />
      },
      {
        path: "survey/8",
        element: <FraudMessagePage />
      },
      {
        path: "survey/9",
        element: <FraudSituationPage />
      },
      {
        path: "survey/9",
        element: <FraudSituationPage />
      },
      {
        path: "survey/result-loading",
        element: <AnalysisLoadingPage/>
      }
    ],
  },
  {
    path: "/emergency",
    children: [
      {
        path: "organ-list",
        // 두 단어로 이루어진 url에는 대시(-)를 쓰는 것이 유리하다.
        element: <OrganListPage />,
      },
      {
        path: "report-landing",
        element: <EmergencyReportLandingPage />,
      },
      {
        path: "report-step",
        element: <ReportStepPage />,
      },
    ],
  },
]);

export default router;
