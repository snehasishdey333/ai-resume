import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewResume from './pages/resume/[resumeId]/view/index.jsx'
import HomePage from './pages/home/index.jsx'
import EditResume from './pages/dashboard/resume/[resumeId]/edit/index.jsx'
import DashboardPage from './pages/dashboard/index.jsx'
import Premium from './pages/premium/index.jsx'
import LoginPage from './pages/auth/login/index.jsx'
import RegisterPage from './pages/auth/register/index.jsx'
import AccountPage from './pages/account/index.jsx'
import LegalPageSkeleton from './pages/legal/index.jsx'
import PaymentSuccessPage from './pages/premium/success/index.jsx'
import PaymentCancelPage from './pages/premium/cancelled/index.jsx'


const router = createBrowserRouter([
  {
   
    element: <App />,
    children: [
      
      {
        path: "/dashboard",
        element: <DashboardPage />
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element:<EditResume/>
      },
      {
        path: "/account",
        element:<AccountPage/>
      },
      {
        path: "/",
        element: <HomePage />
      },
     {
    path: "/premium",
    element: <Premium/>,
  },
      {
    path: "/premium/success",
    element: <PaymentSuccessPage/>,
      },
      {
    path: "/premium/cancelled",
    element: <PaymentCancelPage/>,
      },
     {
    path: "/resume/:resumeId/view",
    element: <ViewResume/>,
  },

    ]
  },
  {
        path: "/auth/login",
        element:<LoginPage/>
      },
  {
        path: "/auth/register",
        element:<RegisterPage/>
      },
  
   
   
 
  {
    children: [
      
      {
        path: "/legal/privacy-policy",
        element: <LegalPageSkeleton path="/legal/privacy-policy"/>
      },
      {
        path: "/legal/terms-of-service",
        element:<LegalPageSkeleton path="/legal/terms-of-service"/>
      },
      {
        path: "/legal/contact-us",
        element:<LegalPageSkeleton path="/legal/contact-us"/>
      },
      {
        path: "/legal/about-us",
        element:<LegalPageSkeleton path="/legal/about-us"/>
      },
      

    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>,
)
