import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Residencies from "./components/Residencies/Residencies";
import Companies from "./components/companies/companies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact"
import GetStarted from "./components/GetStarted/GetStarted"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className = "App">
      <div>  
        <div className ="white-gradient"/>  
         <Header/>
         
         <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/> 
    <Footer/>
     </div>
    );
}

export default App;
