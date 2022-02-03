import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectRoutinesList } from "../../../redux/routines/routinesSelctors";
import CustomButton from "../../ui/button/CustomButton";
import AddRoutine from "../add-routine/AddRoutine";
import RoutineItem from "../routine-item/RoutineItem";

import "./RoutinesPageContainer.scss";

const RoutinesPageContainer = () => {
  const [isAddRoutine, setIsAddRoutine] = useState(false);
  const routinesList = useSelector(selectRoutinesList);
  const routineListKeys = Object.keys(routinesList);
  console.log(routineListKeys);

  const handleAddRoutineDone = () => {
    setIsAddRoutine(false);
  };

  const handleAddroutineClick = () => setIsAddRoutine(true);

  return (
    <div className="routines-page-container">
      <div className="routines-list-container">
        {routineListKeys.length > 0 ? (
          routineListKeys.map((key) => {
            return (
              <RoutineItem
                routine={routinesList[key]}
                isShrinked={isAddRoutine}
              />
            );
          })
        ) : (
          <div>routines list is empty</div>
        )}
      </div>
      <div className="add-routine">
        {isAddRoutine ? (
          <AddRoutine exitAddRoutine={handleAddRoutineDone} />
        ) : (
          <CustomButton
            handleClick={handleAddroutineClick}
            text="add routine"
          />
        )}
      </div>
    </div>
  );
};

export default RoutinesPageContainer;
