import React from "react";
import InfoCompany from "./components/home/InfoCompany";
import NavBar from "./components/home/NavBar";
import "./css/App.css";
import Carousel from './components/home/Carousel'
import OurServices from "./components/home/ourServices";
import Working from "./components/home/Working";
import Footer from "./components/shared/Footer";
import Tecnologies from "./components/home/Tecnologies";
function App() {
  

  return (
    <div>
      <NavBar/>
      <InfoCompany/>
      <Carousel/>
      <Working/>
      <OurServices/>
      <Tecnologies/>
      <Footer/>
    </div>
  );
}

export default App;
