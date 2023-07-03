import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id: 1, content: "buy a milk", done: false},
  {id: 2, content: "take a dog to vet", done: true},
];

function App() {
  const [ hideDoneTasks, setHideDoneTasks ] = useState(false);

  const toggleHidingDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
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
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
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
