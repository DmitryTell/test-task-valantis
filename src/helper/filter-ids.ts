export const filterIds = (allIds: string[], currentPage: number) => {
  const result = [];

  // eslint-disable-next-line no-plusplus
  for (let i = (currentPage - 1) * 50; i < currentPage * 50; i++) {
    result.push(allIds[i]);
  }

  return result;
};
