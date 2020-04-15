import React from "react";
import objetive from "../assets/images/fondoUno.jpg";
import mision from "../assets/images/movilApp.jpg";
import estructure from "../assets/images/estructura.jpg";
import Info from "./Info";
export default function EstructureCompany() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <Info
            title="NUESTRO OBJETIVO"
            description="Crear páginas web, aplicaciones móviles para entidades privadas, públicas o
                    persona individual. Las cuáles serán creadas dependiendo de los requerimientos
                    de cada entidad."
            image={objetive}
          />

          <Info
            title="NUESTRO OBJETIVO"
            description="Crear páginas web, aplicaciones móviles para entidades privadas, públicas o
                    persona individual. Las cuáles serán creadas dependiendo de los requerimientos
                    de cada entidad."
            image={objetive}
          />

          <Info
            title="NUESTRO OBJETIVO"
            description="Crear páginas web, aplicaciones móviles para entidades privadas, públicas o
                    persona individual. Las cuáles serán creadas dependiendo de los requerimientos
                    de cada entidad."
            image={objetive}
          />
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="pri">¿POR QUE TRABAJAR CON NOSTROS?</h3>
            <p class="parrafo">
              Somos destacados por ser puntuales , responsables y comprensibles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
