/* eslint-disable no-unused-vars */
import React from 'react';
import Register from './auth/register'
import Login from './auth/login'
import { Switch, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import ProtectedRouter from './auth/protected'
import Home from './auth/home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <div>
     <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/register" component = {Register}/>
      <ProtectedRouter exact path = "/home" component = {Home}/>
     </Switch>
     <ToastContainer/>
    </div>
  );
}

export default App;
   