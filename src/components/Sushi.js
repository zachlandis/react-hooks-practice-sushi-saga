import React from "react";

function Sushi({sushi}) {
  
  
  function eatSushi() {
    onEatTheSushi(sushi.id)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {sushiPlate ? (
          <img
            src={sushi.img_url}
            alt={sushi.name + "Sushi"}
            width="100%"
          />
        ) : null }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
