import React, { useState } from "react";
import Calc from "./calc";
import {
  CharacterProvider,
  defaultCharacter
} from "./calc/character/character-context";
import defaultStrategy from "./calc//points-strategy/default";
import "./App.css";

function App() {
  const [characterName, setCharacterName] = useState(defaultCharacter.name);
  const [characterLevel, setCharacterLevel] = useState(defaultCharacter.level);
  const [characterRace, setCharacterRace] = useState(defaultCharacter.race);
  const [characterClass, setCharacterClass] = useState(defaultCharacter.class);
  const [characterFeats, setCharacterFeats] = useState(defaultCharacter.feats);
  const [characterBaseStats, setCharacterBaseStats] = useState(
    defaultCharacter.baseStats
  );
  const [characterLevelStats, setCharacterLevelStats] = useState(
    defaultCharacter.levelStats
  );
  const [characterAdditionalStats, setCharacterAdditionalStats] = useState(
    defaultCharacter.additionalStats
  );

  // these two will use default until I create a way to create new point strategies
  const [selectedPointsStrategy, setSelectedPointsStrategy] = useState(
    defaultStrategy
  );
  const [pointsRemaining, setPointsRemaining] = useState(
    defaultStrategy.pointBudget
  );

  const character = {
    name: characterName,
    level: characterLevel,
    race: characterRace,
    class: characterClass,
    feats: characterFeats,
    baseStats: characterBaseStats,
    levelStats: characterLevelStats,
    additionalStats: characterAdditionalStats
  };

  const context = {
    character,
    selectedPointsStrategy,
    pointsRemaining,
    setCharacterName,
    setCharacterLevel,
    setCharacterRace,
    setCharacterClass,
    setCharacterFeats,
    setCharacterBaseStats,
    setCharacterLevelStats,
    setCharacterAdditionalStats,
    setSelectedPointsStrategy,
    setPointsRemaining
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CharacterProvider value={context}>
        <Calc />
      </CharacterProvider>
    </div>
  );
}

export default App;
