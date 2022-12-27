import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Create from './pages/Create';
import Home from './pages/Home';
import Update from './pages/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:"/create",
      element:<Create/>
},
      {
      path:"/home",
      element:<Home/>
},
      {
      path:"/update",
      element:<Update/>
}
]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
