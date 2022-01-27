import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss'



const Sidebar = () =>{
return (
    <div className='sidebar-container'>
        <div className='logo-container'>Workout-Tracker</div>

        <Link className='list-item' to='/exercises'>Exercises</Link>
        <li className='list-item'>workouts</li>
        <li className='list-item'>routines</li>
        <li className='list-item'>dashboard</li>
        <li className='list-item'>nutrition</li>
        <li className='list-item'>mesurements</li>
    </div>
)
}

export default Sidebar