import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
    const [sushi, setSushi] = useState([])
    const [sushiPlate, setSushiPlate] = useState(true)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setSushi(data))
  }, [])

  function eatTheSushi()
    setSushiPlate(!sushiPlate)

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEatTheSushi={eatTheSushi} />
      <Table sushiPlate={sushiPlate} setSushiPlate={setSushiPlate}/>
    </div>
  );
}

export default App;