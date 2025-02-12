import React from "react";

const Random = () => {
  let number = Math.random() * 10;
  return (
    <div style={{ backgroundColor: "#776193" }}>
      Random number is : {Math.round(number)}
    </div>
  );
};

export default Random;
