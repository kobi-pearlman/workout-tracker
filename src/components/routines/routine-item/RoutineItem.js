import React from "react";
import { useDispatch } from "react-redux";
import { removeRoutine } from "../../../redux/routines/routinesActions";

import "./RoutineItem.scss";

const RoutineItem = ({ routine, isShrinked }) => {
  const dispatch = useDispatch();
  return (
    <div className="routine-element">
      <div className="title">{routine.name}</div>
      <span
        className="remove-routine-btn"
        onClick={() => dispatch(removeRoutine(routine.id))}
      >
        X
      </span>
      {!isShrinked && (
        <div className="routine-exercises">
          {routine.exercises.map((exer) => (
            <p>{exer.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoutineItem;
