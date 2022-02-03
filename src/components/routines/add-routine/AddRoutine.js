import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectExercisesByCategory,
} from "../../../redux/exercises/exercisesSelctor";
import { addroutine } from "../../../redux/routines/routinesActions";
import Exercise from "../../exercises/exercise/Exercise";
import AddedExercises from "./added-exercises/AddedExercises";

import "./AddRoutine.scss";

const AddRoutine = ({ exitAddRoutine }) => {
  const [chosenCategory, setChosenCategory] = useState(null);
  const [routineName, setRoutineName] = useState("");
  const [chosenExercises, setChosenExercises] = useState([]);

  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const exercises = useSelector(selectExercisesByCategory(chosenCategory));

  useEffect(() => {
    categories && setChosenCategory(categories[0]);
  }, [categories]);

  const inputChangeHandler = (e) => {
    setRoutineName(e.target.value);
  };

  const addExercise = (exerciseIndex) => {
    const { name, id, category } = exercises[exerciseIndex];
    const exists = chosenExercises.some((exer) => exer.id === id);
    if (!exists) {
      setChosenExercises([...chosenExercises, { name, id, category }]);
    } else {
      console.log("exercise allready axists in your list");
    }
  };

  const removeExercise = (id) => {
    const newList = chosenExercises.filter((exer) => {
      return exer.id !== id;
    });
    setChosenExercises(newList);
  };

  const saveRoutine = (e) => {
    e.preventDefault();
    if (routineName.trim() === "" || !chosenExercises.length) {
      return;
    }
    const uniqeId = new Date().getTime();
    const routine = {
      name: routineName,
      id: uniqeId,
      exercises: chosenExercises,
    };
    dispatch(addroutine(routine));
    exitAddRoutine();
  };

  return (
    <div className="add-routine-container">
      <div className="exercises-list">
        <div className="categories">
          {categories &&
            categories.map((category, i) => {
              return (
                <div
                  className={`category ${
                    category === chosenCategory ? "active" : null
                  }`}
                  key={i}
                  onClick={() => setChosenCategory(category)}
                >
                  {category}
                </div>
              );
            })}
        </div>
        <div className="exercises">
          {exercises &&
            exercises.map((exer, index) => (
              <Exercise
                key={exer.id}
                exercise={exer}
                exerciseIndex={index}
                clickHandler={addExercise}
              />
            ))}
        </div>
        <div className="added-exercises-list">
          <input
            className="routine-name-input"
            id="routine-name"
            type="text"
            value={routineName}
            onChange={(e) => inputChangeHandler(e)}
          />
          <label className="form-input-label" htmlFor="routine-name">
            Routine Name
          </label>
          <AddedExercises
            exercisesList={chosenExercises}
            removeExercise={removeExercise}
          />
        </div>
      </div>
      <form onSubmit={saveRoutine}>
        <button type="submit">save</button>
        <button onClick={() => exitAddRoutine()}>cancel</button>
      </form>
    </div>
  );
};

export default AddRoutine;
