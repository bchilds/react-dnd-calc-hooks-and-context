import React, { useContext } from "react";
import CharacterContext from "./character/character-context";
import PointsGrid from "./points-grid";
import "./style.css";

const Calc = () => {
  const context = useContext(CharacterContext);
  const { character, pointsRemaining, setCharacterName } = context;
  const { characterClass, level, name, race } = character;
  return (
    <div className="calc-wrapper">
      <h2>
        Hello{" "}
        <input
          className="character-name"
          style={{
            width: `${name.length}ch`,
            minWidth: "1ch"
          }}
          value={name}
          onChange={e => setCharacterName(e.target.value)}
        ></input>
        .<br></br>
        {`You are a level ${level} ${race.raceName} ${characterClass.name}.`}
        <br></br>
        {`You have ${pointsRemaining} points remaining.`}
      </h2>
      <div>This row contains points remaining shit, maybe level</div>
      <PointsGrid />
    </div>
  );
};

export default Calc;
