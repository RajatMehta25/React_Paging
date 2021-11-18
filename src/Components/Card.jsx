import React from "react";

const Card = ({ id, title, body }) => {
  return (
    <div className="w-25 ps-md-5">
    
     
          <div className="card border-dark mb-3" >
            <div className="card-header">{id}</div>
            <div className="card-body text-dark">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
            </div>
          </div>
        </div>
     
  );
};

export default Card;
