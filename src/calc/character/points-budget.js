export const calculateRemainingBudget = (baseStats, pointStrategy) => {
  const keys = Object.keys(baseStats);
  return keys.reduce((acc, key) => {
    return acc - pointStrategy[baseStats[key]].cost;
  }, pointStrategy.pointBudget);
};
