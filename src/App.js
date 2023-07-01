const tasks = [
  {id: 1, content: "buy a milk", done: false},
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
        <form className="form">
            <input className="form__input" placeholder="Add new to do task" />
            <button className="form__button">Add a task</button>
          </form>
        </div>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Task list</h2>
          <div className="buttons"></div>
        </header>
        <div className="section__body">
          <ul className="tasks"></ul>
        </div>
      </section>
    </main>
  );
}

export default App;
