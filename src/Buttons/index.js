import { ButtonsWrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHidingDoneTasks, setAllTasksAsDone }) => (
    tasks.length > 0 && (
        <ButtonsWrapper>
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
        </ButtonsWrapper>
    )
);

export default Buttons;