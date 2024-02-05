// import css file
import './App.css';
import './Media.css';
import './Home.css';
import './Footer.css'
import './Search.css';
import './Navbar.css';
import './Support.css';
import './Info.css';
import './Lounge.css';
import './Travelars.css';
import './Subscribers.css';
// import component
import Navbar from './components/navbar/navbar';
import Home from './components/Home/home';
import Search from './components/Search/search';
import Support from './components/Support/support';
import Info from './components/info/info';
import Lounge from './components/Lounge/lounge';
import Travelars from './components/Travelars/Travelars';
import Subscribers from './components/Subscribers/Subscribers';
import Footer from './components/Footer/footer';



function App() {



  return (
   <div className='body'>
    <Navbar/>
    <Home/>
    <Search/>
    <Support/>
    <Info/>
    <Lounge/>
    <Travelars/>
    <Subscribers/>
    <Footer/>
   </div>
       
     
  );
}

export default App;