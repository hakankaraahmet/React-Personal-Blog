import React from "react";

const Card = ({ image, title, content,link }) => {
  return (
    <div className="col-lg-4 ">
      <div class="card m-3 simple-card">
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
          <h3 class="card-title text-center">{title}</h3>
          <p class="card-text simple-card-content">{content}</p>
          <a href={link} class="btn btn-warning" target="_blank">
            Detaylı bilgi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
