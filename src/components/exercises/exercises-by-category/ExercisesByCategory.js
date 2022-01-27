import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectExercisesByCategory } from "../../../redux/exercises/exercisesSelctor";

import './ExercisesByCategory.scss'

const ExercisesByCategory = () =>{
 
    const param = useParams()
    const exercises = useSelector(selectExercisesByCategory(param.category))
    

    return <div className="container">
        <h1 className="title">{param.category} Exercises</h1>
    <div className="exercises-container">
        <div className="exercises-list">
        {exercises.map(exer=> <div key={exer.id}> {exer.name}</div>)}
    </div>
    </div>
    </div>
}

export default ExercisesByCategory