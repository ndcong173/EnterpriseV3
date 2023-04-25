import './App.css'
import PostFormModal from './components/PostFormModal'
import AuthModal from './components/AuthModal'
import axios from 'axios'
import { UserContextProvider } from './components/UserContext'
import PostFormContext from './components/PostFormContext'
import { useEffect, useState } from 'react'
import AuthModalContext from './components/AuthModalContext'
import Routing from './components/Routing'

axios.defaults.baseURL = 'http://127.0.0.1:4000'
axios.defaults.withCredentials = true

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPostFormModal, setShowPostFormModal] = useState(false)



  return (
    <AuthModalContext.Provider value={{ show: showAuthModal, setShow: setShowAuthModal }}>
      <UserContextProvider>
        <PostFormContext.Provider value={{ show: showPostFormModal, setShow: setShowPostFormModal }}>
          <div className='bg-reddit_dark min-h-screen mx-auto'>
            <PostFormModal className='hidden' />
            <AuthModal />
            <Routing/>
          </div>
        </PostFormContext.Provider>
      </UserContextProvider>
    </AuthModalContext.Provider>


  )
}

export default App
