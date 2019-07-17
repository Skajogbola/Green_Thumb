import React from "react";
import "./style.css";

function Card({ title, children, showDetails, fixedHeightWidth }) {
  return (
    <div className="card mt-4" onClick={showDetails}>
      <div className="card-header">
        <h3>
          <strong>
            {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

// {`card mt-4${fixedHeightWidth ? " fixedCardSize" : ""}`} onClick={showDetails}>

export default Card;
