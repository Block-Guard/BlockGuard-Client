import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage/HomePage";

import EmergencyMainPage from "../pages/Emergency/EmergencyMain/EmergencyMainPage";
import FraudLandingPage from "../pages/FraudSurvey/FraudLandingPage/FraudLandingPage";
import FraudSurveyPage from "../pages/FraudSurvey/FraudSurveyPage/FraudSurveyPage";
import FraudLayout from "../layouts/FraudLayout";
import MainLayout from "../layouts/MainLayout";
import OrganListPage from "../pages/Emergency/OrganListPage/OrganListPage";

import EmergencyReportOverviewPage from "../pages/Emergency/EmergencyReport/EmergencyReportOverviewPage";

import FraudLinkNumPage from "../pages/FraudSurvey/FraudLinkNumPage/FraudLinkNumPage";
import FraudMessagePage from "../pages/FraudSurvey/FraudMessagePage/FraudMessagePage";
import FraudSituationPage from "../pages/FraudSurvey/FraudSituationPage/FraudSituationPage";
import ReportStep1 from "../pages/Emergency/EmergencyReport/ReportStep1";
import ReportStepLayout from "../layouts/ReportStepLayout";
import ReportStep2 from "../pages/Emergency/EmergencyReport/ReportStep2";
import ReportStep3 from "../pages/Emergency/EmergencyReport/ReportStep3";
import ReportStep4 from "../pages/Emergency/EmergencyReport/ReportStep4";
import EmergencyReportCompletionPage from "../pages/Emergency/EmergencyReport/EmergencyReportCompletionPage";
import AnalysisResultPage from "../pages/FraudSurvey/AnalysisResultPage/AnalysisResultPage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup/Signup";
import SignupComplete from "../pages/Auth/Signup/SignupComplete";
import SimulationMainPage from "../pages/Simulation/SimulationMain/SimulationMainPage";
import SimulationSelect from "../pages/Simulation/SimulationSelect/SimulationSelect";
import RespondToPolice from "../pages/Simulation/PhishingSimulations/PublicOrgan/RespondToPolice";
import CallViewLayout from "../layouts/CallViewLayout";
import CallViewLoan from "../pages/Simulation/PhishingSimulations/LoanInvestment/CallViewLoan";
import AllowPermissionPage from "../pages/Simulation/PhishingSimulations/LoanInvestment/FakeAllowPermissionPage/AllowPermissionPage";
import FakeAppLandingPage from "../pages/Simulation/PhishingSimulations/LoanInvestment/FakeLandingPage/FakeAppLandingPage";
import FakeHomePage from "../pages/Simulation/PhishingSimulations/LoanInvestment/FakeHomePage/FakeHomePage";
import FakeLoanInvestPage from "../pages/Simulation/PhishingSimulations/LoanInvestment/FakeLoanInvestPage/FakeLoanInvestPage";
import ExplainLoanPhishPage from "../pages/Simulation/PhishingSimulations/ExplainPhishPage/ExplainPhishPage";
import { explainPhishDeliCard, explainPhishFamAqui, explainPhishLoan, explainPhishPublicOrg } from "../pages/Simulation/PhishingSimulations/ExplainPhishPage/constant";
import ProsecutorMessage from "../pages/Simulation/PhishingSimulations/PublicOrgan/ProsecutorMessage";
import MessageViewLayout from "../layouts/MessageViewLayout";


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
      {
        path: "simulation",
        element: <SimulationMainPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "signup",
        children: [
          { index: true, element: <Signup /> },
          { path: "complete", element: <SignupComplete /> },
        ],
      },
    ],
  },
  {
    path: "/fraud-analysis",
    children: [
      {
        path: "landing",
        element: <FraudLandingPage />,
      },
      {
        path: "survey",
        element: <FraudLayout />,
        children: [
          {
            path: "1-6",
            element: <FraudSurveyPage />,
          },
          {
            path: "7",
            element: <FraudLinkNumPage />,
          },
          {
            path: "8",
            element: <FraudMessagePage />,
          },
          {
            path: "9",
            element: <FraudSituationPage />,
          },
          {
            path: "9",
            element: <FraudSituationPage />,
          },
        ],
      },
      {
        path: "result",
        element: <AnalysisResultPage />,
      },
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
        path: "report-overview",
        element: <EmergencyReportOverviewPage />,
      },
      {
        path: "report-step",
        element: <ReportStepLayout />,
        children: [
          {
            path: "1",
            element: <ReportStep1 />,
          },
          {
            path: "2",
            element: <ReportStep2 />,
          },
          {
            path: "3",
            element: <ReportStep3 />,
          },
          {
            path: "4",
            element: <ReportStep4 />,
          },
        ],
      },
      {
        path: "report-completion",
        element: <EmergencyReportCompletionPage />,
      },
    ],
  },
  {
    path: "/simulation",
    children: [
      {
        path: "select-type",
        element: <SimulationSelect />,
      },
      {
        path: "public-organ",
        children: [
          {
            path: "step1",
            element: <CallViewLayout />,
            children: [{ index: true, element: <RespondToPolice /> }],
          },
          {
            path: "step2",
            element: <MessageViewLayout sender="검찰청" />,
            children: [{ index: true, element: <ProsecutorMessage /> }],
          },
        ],
      },
      {
        path: "loan-investment",
        children: [
          {
            path: "step1",
            element: <CallViewLayout />,
            children: [{ index: true, element: <CallViewLoan /> }],
          },
          {
            path: "fake-app-permmision",
            element: <AllowPermissionPage />
          },
          {
            path: "fake-app-landing",
            element: <FakeAppLandingPage />
          },
          {
            path: "fake-app-home",
            element: <FakeHomePage />
          },
          {
            path: "fake-loan-invest",
            element: <FakeLoanInvestPage />
          },
          {
            path: "explain-fraud",
            element: <ExplainLoanPhishPage info={explainPhishLoan} />
          },
          {
            path: "explain-fraud/2",
            element: <ExplainLoanPhishPage info={explainPhishFamAqui} />
          },
          {
            path: "explain-fraud/3",
            element: <ExplainLoanPhishPage info={explainPhishPublicOrg} />
          },
          {
            path: "explain-fraud/4",
            element: <ExplainLoanPhishPage info={explainPhishDeliCard} />
          }
        ],
      },
    ],
  },
]);

export default router;
