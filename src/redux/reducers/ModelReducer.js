import { GLOBALTYPES } from "../actions/GlobalTypes";

const initialState = false;

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.MODAL:
      return action.payload;

    default:
      return state;
  }
};

export default modalReducer;