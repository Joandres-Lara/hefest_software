import React from "react";
import desarrollo from "../../assets/images/web.jpg";
import desarrollo2 from "../../assets/images/movil.jpg";
import angular from "../../assets/images/angular.png";
export default function OurServices() {
  return (
    <div class="container">
        <h3 class="colorStyle mt-4">NUESTRO SERVICIOS</h3>
      

      <div class="row">
        <div class="col-sm-6">
          <div style={{ marginRight: "60px" }} class="card bg-dark">
            <img src={desarrollo} class="card-img-top" alt="..." />
            <div class="card-body ">
              <h5 class="card-title colorStyle">Desarrollo de paginas web </h5>
            </div>
          </div>
        </div>

        <div class="col-sm-6 ">
          <div style={{ marginLeft: "56px" }} class="card  bg-dark ">
            <img src={desarrollo2} class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title colorStyle ">
                Desarrollo de aplicaciones moviles
              </h5>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
