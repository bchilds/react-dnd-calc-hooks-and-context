import React, { useContext } from "react";
import CharacterContext from "./character/character-context";
import PointsGrid from "./points-grid";
import "./style.css";

const Calc = () => {
  const context = useContext(CharacterContext);
  const { character, pointsRemaining, setCharacterName } = context;
  return (
    <div className="calc-wrapper">
      <h2>
        Hello{" "}
        <input
          className="character-name"
          style={{
            width: `${character.name.length}ch`,
            minWidth: "1ch"
          }}
          value={character.name}
          onChange={e => setCharacterName(e.target.value)}
        ></input>
        .<br></br>You have {pointsRemaining} points remaining.
      </h2>
      <div>This row contains points remaining shit, maybe level</div>
      <PointsGrid />
    </div>
  );
};

export default Calc;
