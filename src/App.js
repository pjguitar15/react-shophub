import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from './AuthContext'
import './App.css'

// components
import Signup from './components/Auth/SignupPage.jsx'
import LandingPage from './components/Homepage/LandingPage.jsx'
import Login from './components/Auth/LoginPage.jsx'
import UpdateProfile from './components/Homepage/UpdateProfile.jsx'
import ForgotPassword from './components/Auth/ForgotPassword.jsx'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={LandingPage} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App