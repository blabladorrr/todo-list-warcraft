import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [ hideDoneTasks, setHideDoneTasks ] = useState(false);
  const [ tasks, setTasks ] = useState([
    {id: 1, content: "buy a milk", done: false},
    {id: 2, content: "take a dog to vet", done: true},
  ]);

  const toggleHidingDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  }

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done};
      }
      return task;
    }));
  }

  return (
    <Container>
      <Header title="ToDo list" />
      <Section
        title="Add new task"
        body={
          <Form />
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
          />
        }
      />
    </Container>
  );
}

export default App;
