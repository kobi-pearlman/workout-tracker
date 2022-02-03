import { removeProperty } from "../../utils/utils";
import { routineActionTypes } from "./routinesTypes";

const routineReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case routineActionTypes.ADD_ROUTINE:
      return { ...state, [payload.id]: payload };

    case routineActionTypes.REMOVE_ROUTINE:
      return removeProperty(state, payload);

    default:
      return state;
  }
};
export default routineReducer;
