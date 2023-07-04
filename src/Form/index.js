import { useState } from "react";
import { StyledForm, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [ newTaskContent, setNewTaskContent ] = useState("");

    const preventFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("");
    }

    return (
        <StyledForm 
            onSubmit={preventFormSubmit}
        >
            <FormInput
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                placeholder="Add new to do task"
            />
            <FormButton
                onClick={() => addNewTask(newTaskContent.trim())}
            >
                Add a task
            </FormButton>
        </StyledForm>
    );
}

export default Form;