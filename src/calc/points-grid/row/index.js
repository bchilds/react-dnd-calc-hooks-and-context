import React, { useContext } from "react";
import { emptyObj } from "../../../defaults/empty";
import CharacterContext from "../../character/character-context";

const Row = ({ statName }) => {
  const context = useContext(CharacterContext);
  const { character, selectedPointsStrategy } = context;
  const { baseStats, levelStats, additionalStats, race } = character; // race
  const { racialStats = emptyObj } = race; // if no race picked, default to empty obj

  const racialStat = racialStats[statName] || 0;
  const additionalStat = additionalStats[statName] || 0;
  const levelStat = levelStats[statName] || 0;
  const total = baseStats[statName] + racialStat + additionalStat;
  return (
    <React.Fragment>
      <span>{statName}</span>
      <input
        className="base-stat-box"
        value={baseStats[statName]}
        onChange={() => {}}
      />
      <span className="racial-stat-box">{racialStat}</span>
      <input
        className="user-stat-box"
        value={additionalStat}
        onChange={() => {}}
      />
      <input className="level-stat-box" value={levelStat} onChange={() => {}} />
      <span>=</span>
      <span className="total-stat-box">{total}</span>
      <span className="mod-box">{selectedPointsStrategy[total].modifier}</span>
    </React.Fragment>
  );
};

export default Row;
