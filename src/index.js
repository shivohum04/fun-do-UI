import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signin from './components/signin.js';
import Signup from './components/signup.js';
import SearchAppBar from './components/navbar.js';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import {myTheme} from './components/theme.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from './components/dashboard.js';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard/>
  },  
  {
    path:'/signin',
    element:<Signin/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
