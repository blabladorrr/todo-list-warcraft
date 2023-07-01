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
          <form className="form js-form">
            <input className="form__input js-newTask" placeholder="Add new to do task" />
            <button className="form__button">Add a task</button>
          </form>
        </div>
      </section>
      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Task list</h2>
          <div className="buttons js-buttons"></div>
        </header>
        <div className="section__body">
          <ul className="tasks js-tasks"></ul>
        </div>
      </section>
    </main>
  );
}

export default App;
