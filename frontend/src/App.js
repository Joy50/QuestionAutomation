import React from "react";
import { Routes,Route } from "react-router-dom";
import TopBar from "../src/components/includes/TopBar"
import AddQuestions from "./components/AddQuestions";
import AutoGenerate from "./components/AutoGenerate";
import DashBoard from './components/DashBoard'
import Login from "./components/Login";
import ManageQuestions from "./components/ManageQuestions";
import ManageScripts from "./components/ManageScripts";
import ManualGenerate from "./components/ManualGenerate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path='/dashboard' element={<><TopBar/><DashBoard/></>}/>
        <Route path="/addquestion" element={<><TopBar/><AddQuestions/></>}/>
        <Route path="/managequestion" element={<><TopBar/><ManageQuestions/></>}/>
        <Route path="/auto" element={<><TopBar/><AutoGenerate/></>}/>
        <Route path="/manual" element={<><TopBar/><ManualGenerate/></>}/>
        <Route path="/managescripts" element={<><TopBar/><ManageScripts/></>}/>
      </Routes>
    </div>
  );
}

export default App;
