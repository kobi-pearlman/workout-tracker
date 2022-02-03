import React from "react";

import "./AddedExercises.scss";

const AddedExercises = ({ exercisesList, removeExercise }) => {
  return (
    <div className="added-exercises-container">
      {exercisesList.map((exer) => (
        <div key={exer.id} className="added-exercise">
          <span className="added-exercise-name">{exer.name}</span>

          <button
            className="remove-btn"
            onClick={() => removeExercise(exer.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
export default AddedExercises;
