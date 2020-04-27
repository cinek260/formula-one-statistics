export const parseDriversByNationalities = (data) =>
  data
    .reduce((accumulator, currentValue) => {
      const index = accumulator.findIndex(
        (item) => item.name === currentValue.nationality
      );
      if (index === -1) {
        return [...accumulator, { name: currentValue.nationality, value: 1 }];
      }
      accumulator[index].value += 1;
      return accumulator;
    }, [])
    .sort((a, b) => (a.value > b.value ? -1 : a.value < b.value ? 1 : 0))
    .slice(0, 10);
