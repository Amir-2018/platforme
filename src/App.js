//import Login from "./components/Login";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavH from "./components/NavH";
import Home from "./components/Home";
import Present from "./components/Present";
import Card from "./components/Card";
import Footer from "./components/Footer";
import DevoirScours from "./components/DevoirScours";
import Section from "./components/Section";
import Product from "./components/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeImage from "./components/HomeImage";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      {/*   */}
        <Router>
        <Routes>
        <Route exact path='/' element={<div><NavH/>< HomeImage /> <Services/><About/><Contact/></div>}></Route>

        <Route exact path='/home' element={<div><NavH/>< HomeImage /> <Services/><About/><Contact/></div>}></Route>
             <Route exact path='/login' element={<div><NavH/> < Login /></div>}></Route>
            <Route exact path='/register' element={<div><NavH/> < Signup /></div>}></Route>
            <Route exact path='/section' element={<div><NavH/> < Section /></div>}></Route>
            <Route exact path='/product' element={<div><NavH/>< Product /></div>}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/profile' element={< Profile />}></Route>   
                   
            <Route exact path='/specialiste' element={< DevoirScours />}></Route>   
            
        </Routes>
        </Router>

       
   
  
    {/* <Footer/> */}
      
    </div>
  );
}

export default App;
