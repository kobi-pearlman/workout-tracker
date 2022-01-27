import React from "react";
import { useNavigate } from "react-router-dom";

import './CategoryItem.scss'


const CategoryItem = ({category})=>{
    const navigate = useNavigate()
    
    return(
    <div className="category" onClick={()=>navigate(category)}>
        <h3>{category.toUpperCase()}</h3>
    </div>
)}

export default CategoryItem