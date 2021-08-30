import './App.css';
import React, { useState } from 'react';

import {Provider} from 'react-redux';
import store from './store/store'
import {useSelector} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/* Import components */
import {Login} from './Components/Login/Login'
import { Layout } from './Components/Layout/Layout.jsx';
import {Logout} from './Components/Logout/Logout'

/*  Estados del usuario */
import useToken from './useToken';


/* */

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <Provider store={store}>
      <Layout /> 
    </Provider>

  );
}

export default App;
