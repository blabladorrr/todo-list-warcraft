import { useState, useRef } from "react";
import { StyledForm, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [ newTaskContent, setNewTaskContent ] = useState("");
    const inputRef = useRef(null);

    const submimtForm = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <StyledForm 
            onSubmit={submimtForm}
        >
            <FormInput
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                placeholder="Add new to do task"
                ref={inputRef}
            />
            <FormButton>
                Add a task
            </FormButton>
        </StyledForm>
    );
}

export default Form;