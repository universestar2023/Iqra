import './App.css';
import Features from "./components/LandingPage/page/Features.jsx"
import HomePage from './components/LandingPage/page/home.js';
import LastPage from './components/LandingPage/LastPage/lastpage.js';
import Navbar from './components/LandingPage/Navbar/navbar.jsx';
import Footer from './components/LandingPage/Footer/footer.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Features/>
    <LastPage/>
    <Footer/>
    </>
  );
}

export default App;
