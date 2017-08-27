export const dateParser = sep => date => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}${sep}${m >= 10 ? '' : 0}${m}${sep}${d >= 10 ? '' : 0}${d}`;
};
