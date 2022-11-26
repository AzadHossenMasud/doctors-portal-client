import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <DisplayError></DisplayError>,
    children : [
      {
        path: '/dashboard',
        element: <MyAppointments></MyAppointments>
      },
      {
        path: '/dashboard/users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/adddoctor',
        element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
      },
      {
        path: '/dashboard/managedoctor',
        element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: async ({ params }) => {
          return fetch(`https://doctors-portal-server-seven-beta.vercel.app/booking/${params.id}`);
        }, 
      },
    ]
  },
]);

export default router;
