import React from "react";
import { connect, } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {  selectExercisesIsLoading, selectExercisesIsReady } from "../../redux/exercises/exercisesSelctor";

import WithSpinner from "../ui/with-sppiner/WithSpinner";
import ExercisesByCategory from "./exercises-by-category/ExercisesByCategory";
import Directory from "./exercises-directory/directory/Directory";


import './ExercisesPageContainer.scss'

const ExercisesPageContainer = () =>{
    
    return <Routes> 
    <Route  path='' element={<Directory/>}/>
    <Route path= ':category' element={<ExercisesByCategory/>}/>
    </Routes>
}

const mapStateToProps = createStructuredSelector({
    isLoading:selectExercisesIsLoading,
    isReady:selectExercisesIsReady, 
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
    )(ExercisesPageContainer)