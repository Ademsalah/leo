import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Cards({ imageSrc, title, birthdate }) {
  return (
    <div className="col-md-3 mb-3">
      <div className="card">
        <img className="card-img-top" src={imageSrc} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">born {birthdate}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}
Cards.defaultProps={
    imageSrc:"imageDefault",
    title:"titleDefault",
    birthdate:"birthdateDefault"

}
export default Cards;
