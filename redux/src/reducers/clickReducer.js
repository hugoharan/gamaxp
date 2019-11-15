const initialState = {
  newValue: ''
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'click':
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};