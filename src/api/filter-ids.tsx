export const filterIds = (currentPage: number, ids: string[]) => {
  const result = [];

  // eslint-disable-next-line no-plusplus
  for (let i = (currentPage - 1) * 50; i < currentPage * 50; i++) {
    result.push(ids[i]);
  }

  return result;
};
