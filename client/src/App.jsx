import './App.css'

import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import axios from 'axios'
import { UserContextProvider } from './components/UserContext'
import AccountPage from './pages/AccountPage'
import Layout from './components/Layout'

axios.defaults.baseURL = 'http://127.0.0.1:4000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/account' element={<AccountPage />} />
        </Route>


      </Routes>
    </UserContextProvider>


  )
}

export default App
