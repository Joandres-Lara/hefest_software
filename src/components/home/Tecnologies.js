import React from 'react'
import imgAngular from '../../assets/images/angular.png'
import imgHtml from '../../assets/images/html.png'
import imgReactRn from '../../assets/images/react.png'

export default function Tecnologies() {
    return (
        <div class="container">
      <div class="row" style={{background: "black" ,textAlign: "center"}}>
        <div class="col-sm-12">
          <h3 class="colorStyle">TECNOLOGIA</h3>
        </div>
        <div class="col-sm-4">
          <img
            src={imgAngular}
            alt="ANGULAR"
            class="img-rounded"
            style={{height: "100px", width: "100px"}}
          />
        </div>
        <div class="col-sm-4">
          <img
            src={imgHtml}
            alt="HTML5"
            class="img-rounded"
            style={{height: "100px", width: "100px"}}
          />
        </div>
        <div class="col-sm-4">
          <img
            src={imgReactRn}
            alt="REACT NATIVE"
            class="img-rounded"
            style={{height: "100px", width: "100px"}}
          />
        </div>
      </div>
    </div>
    )
}
