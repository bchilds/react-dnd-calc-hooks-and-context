export const STR = "STR";
export const DEX = "DEX";
export const CON = "CON";
export const INT = "INT";
export const WIS = "WIS";
export const CHR = "CHR";
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

export default generateDefaultStats();
