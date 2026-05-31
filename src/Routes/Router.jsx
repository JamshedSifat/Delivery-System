import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/login/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path:'coverage',
          Component:Coverage,
          loader:() => fetch('/public/ServiceCenter.json').then(res => res.json())

        },
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      },
    ]
  }

]);