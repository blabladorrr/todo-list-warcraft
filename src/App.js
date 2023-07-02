import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  {id: 1, content: "buy a milk", done: true},
  {id: 2, content: "take a dog to vet", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <header>
        <h1>ToDo list</h1>
      </header>
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
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </main>
  );
}

export default App;
