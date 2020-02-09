export const STR = "STR";
export const DEX = "DEX";
export const CON = "CON";
export const INT = "INT";
export const WIS = "WIS";
export const CHR = "CHR";
export const allStats = [STR, DEX, CON, INT, WIS, CHR];
export const DEFAULT_VALUE = 8;

export const generateDefaultStats = function() {
  return {
    [STR]: DEFAULT_VALUE,
    [DEX]: DEFAULT_VALUE,
    [CON]: DEFAULT_VALUE,
    [INT]: DEFAULT_VALUE,
    [WIS]: DEFAULT_VALUE,
    [CHR]: DEFAULT_VALUE
  };
};

export const getModifier = function(total) {
  return Math.floor((total - 10) / 2);
};

export const validateBaseStat = function(value, selectedPointsStrategy = {}) {
  const { minStat, maxStat } = selectedPointsStrategy;
  if (value < minStat) {
    return Number(minStat);
  }

  if (value > maxStat) {
    return Number(maxStat);
  }

  return Number(value);
};

export default generateDefaultStats();
