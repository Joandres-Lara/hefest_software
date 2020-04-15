import React from "react";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import "../../css/home.css";
import imgSlider from "../../assets/images/Android.jpg";
import imgSlider2 from "../../assets/images/diseñoweb.jpg";
import imgSlider3 from "../../assets/images/seguridad.png";

export default function Carousel() {
  return (
    
    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide carouselsize" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block " src={imgSlider} alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block " src={imgSlider2} alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block " src={imgSlider3} alt="Third slide"/>
      </div>
    </div>
   
  </div>
    </div>
    
  );
}
