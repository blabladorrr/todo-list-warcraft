import { ButtonsWrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHidingDoneTasks, setAllTasksAsDone, fetchExampleTasks }) => (
    <ButtonsWrapper>
        {tasks.length > 0 && (
                <>
                    <Button 
                        onClick={toggleHidingDoneTasks}
                    >
                        {hideDoneTasks ? "Show" : "Hide"} done tasks
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
                        onClick={setAllTasksAsDone}
                    >
                        Finish all tasks
                    </Button>
                </>
        )}
        <StyledButtons
            onClick={fetchExampleTasks}
        >
            Download example tasks
        </StyledButtons>
    </ButtonsWrapper>

);

export default Buttons;