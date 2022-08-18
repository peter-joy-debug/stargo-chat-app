import { GLOBALTYPES } from "../actions/GlobalTypes";



const socketReducer = (state = [], action) => {
  switch (action.type) {
    case GLOBALTYPES.SOCKET:
      return action.payload;

    default:
      return state;
  }
};

export default socketReducer;