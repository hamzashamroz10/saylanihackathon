import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Pages/Authentication/Login/Login";
import Signup from "./Pages/Authentication/Signup/Signup";
import ForgotPassword from "./Pages/Authentication/forgotPassword/ForgotPassword";
import ResetPassword from "./Pages/Authentication/ResetPassword/ResetPassword";
import Home from "./Pages/Home/Home";
import { ToastContainer } from 'react-toastify';
import DashboardLayout from "./Components/DashBoard/DashBoardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ApplicationForm from "./Pages/Dashboard/ApplicationForm";
import AllApplication from "./Pages/Dashboard/AllApplication";

const App = () => {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'forgotPassword',
          element: <ForgotPassword />
        },
        {
          path: 'resetPassword/:token',
          element: <ResetPassword />
        },
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
            {
              path: '/dashboard',
              element: <ApplicationForm />
            },
            {
              path: 'applicationform',
              element: <ApplicationForm />
            },
            {
              path: 'allApplication',
              element: <AllApplication />
            },
          ]
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={Router} />
      <ToastContainer />
    </>
  )
}

export default App;