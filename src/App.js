
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExercisesPageContainer from './components/exercises/ExercisesPageContainer';
import Sidebar from './components/side-bar/Sidebar';
import { fetchExercises } from './redux/exercises/exercisesActions';

function App() {
  
  const dispath = useDispatch()

  useEffect(()=>{
    dispath(fetchExercises())
   
  },[dispath])
  return (
  <div className="App">
    <Sidebar/>
    <Routes>
    <Route path='/exercises/*' element={<ExercisesPageContainer/>}/>
    </Routes>
  </div>
  );
}

export default App;
