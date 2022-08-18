import { GLOBALTYPES } from "../actions/GlobalTypes";


const statusReducer = (state = false, action) => {
  switch (action.type) {
    case GLOBALTYPES.STATUS:
      return action.payload;

    default:
      return state;
  }
};

export default statusReducer;