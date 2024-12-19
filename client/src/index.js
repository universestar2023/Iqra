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
import HollandCodeTest from './components/LandingPage/MainHome/tt/tts';
import { Provider } from "react-redux"; // Import Provider from react-redux
import FilteredStreams from './components/LandingPage/MainHome/streams/classx';

import Chatbot from './components/LandingPage/MainHome/chatbot/Chatbot';
import DashboardPage from './components/UserProfile/dashboard.jsx'
import AboutUs from './components/LandingPage/Aboutus/aboutus.jsx'
import FeedbackForm from './components/LandingPage/Feedback form/feedback.jsx';
import WorkInProgress from './components/LandingPage/MainHome/class12.jsx';
import JobInsights from './components/LandingPage/MainHome/job.jsx';
import UndergraduateInfo from './components/LandingPage/MainHome/ug.jsx';
import CareerExplorationGame from './components/LandingPage/MainHome/game.jsx';
import Watch from './components/LandingPage/MainHome/watch.jsx';
import CareerDevelopmentRoadmap from './components/LandingPage/MainHome/career.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ug",
    element: <UndergraduateInfo />,
  },
  {
  path: "/watch",
  element: <Watch />,
 },
  {
    path: "/game",
    element: <CareerExplorationGame />,
  },
  {
    path: "/career",
    element: <CareerDevelopmentRoadmap />,
  },
  {
    path: "/job",
    element: <JobInsights />,
  },
  {
    path: "/ww",
    element: <WorkInProgress />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/tt",
    element: <HollandCodeTest />,
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
    path: "/chatbot",
    element: <Chatbot/>,
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
  },
  {
    path:"/feedback",
    element:<FeedbackForm/>
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
