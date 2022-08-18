import { GLOBALTYPES } from "../actions/GlobalTypes";

const userTypeReducer = (state = "user", action) => {
  switch (action.type) {
    case GLOBALTYPES.USER_TYPE:
      return action.payload;

    default:
      return state;
  }
};

export default userTypeReducer;