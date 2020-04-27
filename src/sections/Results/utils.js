export const getFormulaOneSeasons = () => {
  const yearsArray = [];
  for (let i = new Date().getFullYear() - 1; i >= 1950; i -= 1) {
    yearsArray.push(i);
  }
  return yearsArray;
};

export const getRaceNames = (races = []) => races.map((r) => r.raceName);
