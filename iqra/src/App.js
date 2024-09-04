import './App.css';
import Features from './components/LandingPage/page/Features.jsx'
import HomePage from './components/LandingPage/page/homes.jsx';
import LastPage from './components/LandingPage/LastPage/lastpage.js';
import Navbar from './components/LandingPage/Navbar/navbar.jsx';
import Footer from './components/LandingPage/Footer/footer.jsx';
import Subscription from './components/LandingPage/page/subscription.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Features/>
    <Subscription/>
    <LastPage/>
    <Footer/>
    </>
  );
}

export default App;
