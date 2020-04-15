import React from "react";

export default function Info(props) {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="row card-body">
            <div class="col-sm-6">
              <h3 class="card-title">{props.title}</h3>
              <p class="card-text">{props.description}</p>
            </div>
            <div class="embed-responsive embed-responsive-1by1">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
