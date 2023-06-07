import { useState } from "react";

const Card = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <article className={`card ${props.darkmode ? "dark" : ""}`}>
      {/* Visible */}
      <div className="title">
        <h3>{props.name}</h3>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "hide" : "show more"}
        </button>
      </div>
      {/* State Change */}
      {/* condition ? true : false */}
      {isVisible && (
        <div className="info">
          <p>Email: {props.email}</p>
          <p>Contact: {props.contact}</p>
        </div>
      )}
    </article>
  );
};

export default Card;
