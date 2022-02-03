import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectExercisesByCategory } from "../../../redux/exercises/exercisesSelctor";
import Exercise from "../exercise/Exercise";

import "./ExercisesByCategory.scss";

const ExercisesByCategory = () => {
  const [currentExercise, setCurrentExercise] = useState(null);

  const param = useParams();
  const exercises = useSelector(selectExercisesByCategory(param.category));
  console.log(param);

  const chooseExercise = (exerciseIndex) => {
    setCurrentExercise(exercises[exerciseIndex]);
  };

  return (
    <div className="exercises-container">
      <h1 className="title">{param.category} Exercises</h1>
      <div className="exercises-list-container">
        <div className="exercises-list">
          {exercises.map((exer, index) => (
            <Exercise
              key={exer.id}
              exercise={exer}
              exerciseIndex={index}
              clickHandler={chooseExercise}
            />
          ))}
        </div>
        {currentExercise ? (
          <div className="exercise-info">
            <h2 className="title">{currentExercise.name}</h2>
            {currentExercise.description.length > 10 ? (
              <p
                className="description"
                dangerouslySetInnerHTML={{
                  __html: currentExercise.description,
                }}
              ></p>
            ) : (
              <div>
                <h3>description not avalibale</h3>
              </div>
            )}
          </div>
        ) : (
          <p>choose exercise to see info</p>
        )}
      </div>
    </div>
  );
};

export default ExercisesByCategory;
