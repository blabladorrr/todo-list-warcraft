import { useState, useRef } from "react";
import { StyledForm, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [ newTaskContent, setNewTaskContent ] = useState("");
    const inputRef = useRef(null);

    const preventFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("");
    }

    const onButtonClick = () => {
        addNewTask(newTaskContent.trim());
        inputRef.current.focus();
    };

    return (
        <StyledForm 
            onSubmit={preventFormSubmit}
        >
            <FormInput
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
                placeholder="Add new to do task"
                ref={inputRef}
            />
            <FormButton
                onClick={() => onButtonClick}
            >
                Add a task
            </FormButton>
        </StyledForm>
    );
}

export default Form;