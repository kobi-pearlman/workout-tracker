import { createSelector } from "reselect";
const selectRoutines = (state) => state.routines;

export const selectRoutinesList = createSelector(
  [selectRoutines],
  (routines) => routines
);
