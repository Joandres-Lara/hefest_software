import React from "react";
import "../../css/home.css";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light menu  ">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            
            <li class="nav-item ">
              <a class="nav-link font-weight-bold text-dark" href="#">
                Inicio
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link font-weight-bold text-dark" href="#">
                Portafolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold text-dark" href="#">
                Contacto
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  font-weight-bold text-dark" href="#">
                Conocenos
              </a>
            </li>

          
           
          </ul>
        </div>
      </nav>
    </div>
  );
}
