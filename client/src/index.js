import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/LandingPage/MainHome/HomeP';
import Login from './components/LandingPage/MainHome/Login';
import Signup from './components/LandingPage/MainHome/Signup';
import Result from "./Test/Result";
import Main from './Test/Main';
import Quiz from './Test/Quiz';
import { CheckUserExist } from "./helper/helper";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store"; // Import your Redux store
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import FilteredStreams from './components/LandingPage/MainHome/streams/classx';
import DashboardPage from './components/UserProfile/dashboard.jsx'
import AboutUs from './components/LandingPage/Aboutus/aboutus.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/sign",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/classx",
    element: <FilteredStreams />,
  },
  {
    path: "/test",
    element: <Main></Main>,
  },
  {
    path: "/test/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/test/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path:"/userprofile",
    element:<DashboardPage/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  }
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
