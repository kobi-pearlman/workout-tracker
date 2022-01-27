import React from "react";
import { selectCategories } from "../../../../redux/exercises/exercisesSelctor";
import { useSelector } from "react-redux";
import CategoryItem from "../category-item/CategoryItem";

import './Directory.scss'

const Directory = ()=>{
    const categories = useSelector(selectCategories)

    return<div className="categories-container">
    {categories.map((category,i)=>
     <CategoryItem key={i} category={category}/>)}
     </div>
}
export default Directory