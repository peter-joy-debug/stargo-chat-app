import { GLOBALTYPES } from "../actions/GlobalTypes";

const initialState = {};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return action.payload;

    default:
      return state;
  }
};

export default alertReducer;