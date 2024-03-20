// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Loginu from './components/Loginu';
import Home from './components/Home';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Card from './components/Card';
import Body from './components/Body';
import Homec from './components/Homec';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
}
 from "react-router-dom";


function App() {
  return (
      <>
      <Router>
         <div className="App">

  <Navbar/> 
  
   {/* <Home/>  */}
     <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Loginu" element={<Loginu/>} />
        <Route path="/LoginU/Card" element={<Card/>} />
        <Route path="/Loginu/Home" element ={<Home/>} />
        <Route path="/LoginU/Homec" element={<Homec/>} />
        <Route path="/Loginu/Home1" element ={<Home1/>} />
        <Route path="/Loginu/Home2" element ={<Home2/>} />
        <Route path="/Loginu/AboutUs" element ={<AboutUs/>} />
        <Route path="" element ={<Body/>} />
        
        </Routes>
        <Footer/>
    </div>
   </Router>
 

      </>
  );
}

export default App;
