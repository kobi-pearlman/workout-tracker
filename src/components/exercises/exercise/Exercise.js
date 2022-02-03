import React from "react";

import "./Exercise.scss";

const Exercise = ({ exercise, exerciseIndex, clickHandler }) => {
  return (
    <div className="exercise-container">
      <div className="exercise" onClick={() => clickHandler(exerciseIndex)}>
        {exercise.name}
      </div>
    </div>
  );
};

export default Exercise;
