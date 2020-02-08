import React, { useContext } from "react";
import CharacterContext from "./character/character-context";

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
            width: `${character.characterName.length}ch`,
            minWidth: "1ch"
          }}
          value={character.characterName}
          onChange={e => setCharacterName(e.target.value)}
        ></input>
        .<br></br>You have {pointsRemaining} points remaining.
      </h2>
    </div>
  );
};

export default Calc;
