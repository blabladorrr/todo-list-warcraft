import { useState } from "react";
import { useTaskList } from "./useTaskList";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [ hideDoneTasks, setHideDoneTasks ] = useState(false);
  
  const toggleHidingDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  }

  const {
    tasks,
    addNewTask,
    toggleTaskDone,
    setAllTasksAsDone,
    deleteTask
  } = useTaskList();

  return (
    <Container>
      <Header title="ToDo list" />
      <Section
        title="Add new task"
        body={
          <Form addNewTask={addNewTask} />
        } 
      />
      <Section 
        title="Task list"
        body={
          <Tasks 
            tasks={tasks}
            hideDoneTasks={hideDoneTasks} 
            deleteTask={deleteTask}
            toggleTaskDone={toggleTaskDone}
          />
        }

        buttons={
          <Buttons 
            tasks={tasks} 
            hideDoneTasks={hideDoneTasks} 
            toggleHidingDoneTasks={toggleHidingDoneTasks} 
            setAllTasksAsDone={setAllTasksAsDone}
          />
        }
      />
    </Container>
  );
}

export default App;
