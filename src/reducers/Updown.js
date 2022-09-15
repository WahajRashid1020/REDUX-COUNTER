const initialState = 0;

const changeIt = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1 + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default changeIt;
