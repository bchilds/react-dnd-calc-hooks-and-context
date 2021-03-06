import React from "react";
import defaultStats from "./stats";
import { baseHuman } from "./races";
import { fighter } from "./classes";
import defaultStrategy from "../points-strategy/default";
import { noop } from "../../defaults/noop";
import { emptyObj } from "../../defaults/empty";
export const defaultCharacter = {
  name: "Player",
  level: 1,
  race: baseHuman,
  characterClass: fighter,
  feats: [],
  baseStats: defaultStats,
  levelStats: emptyObj,
  additionalStats: emptyObj
};

const CharacterContext = React.createContext({
  character: defaultCharacter,
  selectedPointsStrategy: defaultStrategy,
  pointsRemaining: defaultStrategy.pointBudget,
  characterActions: {
    setCharacterName: noop,
    setCharacterLevel: noop,
    setCharacterRace: noop,
    setCharacterClass: noop,
    setCharacterFeats: noop,
    setCharacterBaseStat: noop,
    setCharacterLevelStats: noop,
    setCharacterAdditionalStats: noop
  },
  setSelectedPointsStrategy: noop,
  setPointsRemaining: noop
});
export const CharacterProvider = CharacterContext.Provider;
export const CharacterConsumer = CharacterContext.Consumer;
export default CharacterContext;
