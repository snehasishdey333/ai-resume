
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/toaster'

import Footer from './components/custom/Footer'
import { UserContextProvider } from './context/UserInfoContext'

function App() {
  

  return (
    <>
      <UserContextProvider>
      <Header/>
        <Outlet />
        <Footer/>
      <Toaster />
      </UserContextProvider>
    </>
  )
}

export default App
