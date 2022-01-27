
import { createSelector } from "reselect";

const selectExercises = (state) => state.exercises;

export const selectExercisesData = createSelector(
    [selectExercises],
    (exercises)=> exercises.exercisesData ? exercises.exercisesData : null
)

export const selectExercisesByCategory = (category)=> createSelector(
    [selectExercisesData],
    (exercisesData)=> exercisesData ? exercisesData[category] : null
);

export const selectExercisesIsLoading = createSelector(
    [selectExercises],
    exercises =>exercises.isLoading
)

export const selectExercisesIsReady = createSelector(
    [selectExercisesData],
    exercisesData=> !!exercisesData
)

export const selectCategories = createSelector(
    [selectExercisesData],
    exercisesData => exercisesData && Object.keys(exercisesData) 
)