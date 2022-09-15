export const Inc = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const Dec = () => {
  return {
    type: "DECREMENT",
  };
};
