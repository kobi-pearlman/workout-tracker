import { routineActionTypes } from "./routinesTypes";

export const addroutine = (routine) => ({
  type: routineActionTypes.ADD_ROUTINE,
  payload: routine,
});

export const removeRoutine = (id) => ({
  type: routineActionTypes.REMOVE_ROUTINE,
  payload: id,
});
