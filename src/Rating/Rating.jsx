import React, { useState } from "react";
import "./styles.css";

function Rating() {
  const [hover, setHover] = useState();
  const [click, setClick] = useState();

  function handleClick(i) {
    setClick(i);
  }

  function handleMouseEnter(i) {
    setHover(i);
  }

  function handelMouseLeave(i) {
    setHover(click);
  }

  return (
    <div className="stars-container">
      {[...Array(10)].map((_, i) => {
        i += 1;
        return (
          <svg
            key={i}
            className="star"
            width="24"
            height="24"
            fill={i <= (hover || click) ? "yellow" : "black"}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseEnter(i)}
            onMouseLeave={() => handelMouseLeave(i)}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          </svg>
        );
      })}
    </div>
  );
}

export default Rating;
