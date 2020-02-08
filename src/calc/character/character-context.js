import React from "react";
import defaultStats from "./stats";
import defaultStrategy from '../points-strategy/default';
import { noop } from '../../defaults/noop';
export const defaultCharacter = {
  name: "Player",
  level: 1,
  race: null,
  class: null, // this should be its own object
  feats: [],
  baseStats: defaultStats,
  levelStats: {},
  additionalStats: {},
};

const CharacterContext = React.createContext({
 character: defaultCharacter,
 selectedPointsStrategy: defaultStrategy,
 pointsRemaining: defaultStrategy.pointBudget,
 setCharacterName: noop,
 setCharacterLevel: noop,
 setCharacterRace: noop,
 setCharacterClass: noop,
 setCharacterFeats: noop,
 setCharacterBaseStats: noop,
 setCharacterLevelStats: noop,
 setCharacterAdditionalStats: noop,
 setSelectedPointsStrategy: noop,
 setPointsRemaining: noop,
});
export const CharacterProvider = CharacterContext.Provider;
export const CharacterConsumer = CharacterContext.Consumer;
export default CharacterContext;
