import { ButtonsWrapper, Button, ExportCSV } from "./styled";

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
        <Button
            onClick={fetchExampleTasks}
        >
            Download example tasks
        </Button>
        <ExportCSV data={tasks}>Export to CSV</ExportCSV>
    </ButtonsWrapper>

);

export default Buttons;