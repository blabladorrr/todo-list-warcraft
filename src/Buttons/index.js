import "./style.css"

const Buttons = ({ tasks, hideDoneTasks, toggleHidingDoneTasks, setAllTasksAsDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHidingDoneTasks} className="buttons__button">
                {hideDoneTasks ? "Show" : "Hide"} done tasks
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllTasksAsDone}
            >
                Finish all tasks
            </button>
        </div>
    )
);

export default Buttons;