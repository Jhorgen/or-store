export const itemsReducer = (state = { testerr: [], loading: false, error: false}, action) => {
  switch (action.type) {
    case 'REQUESTED_ITEM':
      return {
        testerr: '',
        loading: true,
        error: false,
      };
    case 'REQUESTED_ITEM_SUCCEEDED':
      return {
        testerr: action.testerr,
        loading: false,
        error: false,
      };
    case 'REQUESTED_ITEM_FAILED':
      return {
        testerr: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
