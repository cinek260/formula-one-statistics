const filterNames = (item, nameFilter) =>
  `${item.givenName} ${item.familyName}`
    .toLowerCase()
    .includes(nameFilter.toLowerCase());

const filterNationality = (item, nationalityFilter) =>
  item.nationality.toLowerCase().includes(nationalityFilter.toLowerCase());

export const filterResults = (data, nameFilter, nationalityFilter) =>
  data.filter((item) => {
    const matchesNameFilter = nameFilter ? filterNames(item, nameFilter) : true;
    const matchesNationalityFilter = nationalityFilter
      ? filterNationality(item, nationalityFilter)
      : true;
    return matchesNameFilter && matchesNationalityFilter;
  });
