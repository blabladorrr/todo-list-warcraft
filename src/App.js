import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

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
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Add new task</h2>
        </header>
        <div className="section__body">
          <Form />
        </div>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Task list</h2>
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </header>
        <div className="section__body">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
    </main>
  );
}

export default App;
