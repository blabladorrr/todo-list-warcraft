import { Routes, Route } from "react-router-dom";
import TasksList from "./TasksList";

function App() {
  return (
    <Routes>
      <Route path="/to-do-list" element={<TasksList />} />
      <Route path="/" element={<TasksList />} />
    </Routes>
  );
}

export default App;
