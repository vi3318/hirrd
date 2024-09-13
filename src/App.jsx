import './App.css'
import AppLayout from './layouts/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import JobPage from './pages/JobPage'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SavedJobs'
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoute from './components/protected-route'
import MyJobs from './pages/MyJobs'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: 
        <ProtectedRoute>
          <Onboarding />
        </ProtectedRoute>
        
      },
      {
        path: '/jobs',
        element: <ProtectedRoute><JobListing /></ProtectedRoute>
      },
      {
        path: '/job/:id',
        element: <ProtectedRoute><JobPage /></ProtectedRoute>
      },
      {
        path: '/post-job',
        element: <ProtectedRoute><PostJob /></ProtectedRoute>
      },
      {
        path: '/saved-jobs',
        element:<ProtectedRoute><SavedJobs /></ProtectedRoute> 
      },
      {
        path:'/my-jobs',
        element:<ProtectedRoute><MyJobs /></ProtectedRoute>
      }
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
