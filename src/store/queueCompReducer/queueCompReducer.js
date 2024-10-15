const defaultState = {
  queueCompData: [],
};

const ADD_QUEUE_COMP = "ADD_QUEUE_COMP";

export const CLEAR_QUEUE_COMP = "CLEAR_QUEUE_COMP";

export const queueCompReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_QUEUE_COMP:
      return {
        ...state,
        queueCompData: [...state.queueCompData, action.payload],
      };
    case CLEAR_QUEUE_COMP:
      return { ...state, queueCompData: [] };
    default:
      return state;
  }
};
export const addQueueCompAction = (payload) => ({
  type: ADD_QUEUE_COMP,
  payload,
});
export const clearQueueCompAction = () => ({ type: CLEAR_QUEUE_COMP });
