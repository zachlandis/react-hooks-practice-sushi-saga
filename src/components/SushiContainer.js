import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, onEatTheSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)

  const sushiPieces = sushi.slice(sushiIndex, sushiIndex + 4)

  function handleMoreSushiClick() {
    setSushiIndex((sushiIndex) => (sushiIndex + 4))
    console.log(sushiIndex)
  }

  return (
    <div className="belt">
      {sushiPieces.map((sushiPiece) => (
      <Sushi key={sushiPiece.id} sushi={sushiPiece} onEatTheSushi={eatTheSushi} />
    ))}
      <MoreButton onMoreSushi={handleMoreSushiClick} />
    </div>
  );
}

export default SushiContainer;
