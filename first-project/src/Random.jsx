import React from "react";

const Random = () => {
  let number = Math.random() * 100;
  return (
    <div>
      <h3 style={{ "background-color": "#776691" }}>
        Random number is : {Math.round(number)}
      </h3>
    </div>
  );
};

export default Random;
