const addZeroBefore = (number: string) => (number.length < 2 ? `0${number}` : number);

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}${addZeroBefore(String(month))}${addZeroBefore(String(day))}`;
};
