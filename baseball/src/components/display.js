import React, { useState } from "react";
import Dashboard from "./dashboard.js";

const Display = props => {
  const [balls, ballCount] = useState(0);
  const [strikes, strikeCount] = useState(0);

  const hit = () => {
    ballCount({ balls: 0 });
    strikeCount({ strikes: 0 });
  };

  // Balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
  const ball = () => {
    if (balls < 3) {
      ballCount({ balls: balls + 1 });
    } else {
      ballCount({ balls: 0 });
      strikeCount({ strikes: 0 });
    }
  };

  // Balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
  const strike = () => {
    if (strikes < 2) {
      strikeCount({ strikes: strikes + 1 });
    } else {
      ballCount({ balls: 0 });
      strikeCount({ strikes: 0 });
    }
  };

  // A foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
  const foul = () => {
    if (strikes < 2) {
      strikeCount({ strikes: strikes + 1 });
    }
  };

  return (
    <div>
      <h1>Count</h1>
      <div>
        <h2 data-testid="balls">Balls: {balls}</h2>
        <h2 data-testid="strikes">Strikes: {strikes}</h2>
      </div>
      <Dashboard hit={hit} strike={strike} foul={foul} ball={ball} />
    </div>
  );
};

export default Display;
