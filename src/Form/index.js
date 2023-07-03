import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [ newTaskContent, setNewTaskContent ] = useState("");

    const preventFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={preventFormSubmit}>
            <input 
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                className="form__input"
                placeholder="Add new to do task"
            />
            <button
                className="form__button"
                onClick={() => addNewTask(newTaskContent.trim())}
            >
                Add a task
            </button>
        </form>
    );
}

export default Form;