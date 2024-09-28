export function filterData(searchtext, slicedData) {
  const searchtextLower = searchtext.toLowerCase();
  const filteredData = slicedData.filter((restraunt) =>
    restraunt?.info?.name?.toLowerCase().includes(searchtextLower)
  );
  return filteredData;
}
