import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExercisesPageContainer from "./components/exercises/ExercisesPageContainer";
import Header from "./components/header/Header";
import RoutinesPageContainer from "./components/routines/routines-page-container/RoutinesPageContainer";
import Sidebar from "./components/side-bar/Sidebar";
import { fetchExercises } from "./redux/exercises/exercisesActions";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchExercises());
  }, [dispath]);
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/exercises/*" element={<ExercisesPageContainer />} />
          <Route path="/routines/*" element={<RoutinesPageContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
