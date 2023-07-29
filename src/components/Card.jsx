import '../styles/card.css';

import React from 'react';

function Card(props) {

  return (
    <div>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <a href={props.cardLink} className="card-link" style={{ textDecoration: "none" }}>
          <div className="card">
            <img className="card-img-top" src={props.cardImg} alt="" />
            <div className="card-body">
              <div className="badges">
                <span className="badge badge-success">{props.cardBadge}</span>
              </div>
              <h5 className="card-title" id="card1">{props.cardTitle}</h5>
              <p className="card-text">{props.cardText}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card



