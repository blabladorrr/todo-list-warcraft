import { useState } from "react";
import { useTaskList } from "../useTaskList";
import Form from "../Form";
import Tasks from "../Tasks";
import Buttons from "../Buttons";
import Section from "../Section";
import Header from "../Header";
import Container from "../Container";
import Navigation from "../Navigation";

const TasksList = () => {
    const [ hideDoneTasks, setHideDoneTasks ] = useState(false);

    const toggleHidingDoneTasks = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
    }

    const {
    tasks,
    addNewTask,
    toggleTaskDone,
    toggleTaskPriority,
    setAllTasksAsDone,
    deleteTask,
    fetchExampleTasks,
    editTaskContent,
    setIsTaskEdited,
    setIsDueDateEdited,
    setTaskDueDate
    } = useTaskList();

    return (
        <>
        <Navigation />
        <Container>
                <Header title="ToDo list" />
                <Section
                title="Add new task"
                body={
                    <Form addNewTask={addNewTask} />
                } 
                />

                <Section 
                title="Task list"
                body={
                    <Tasks 
                    tasks={tasks}
                    hideDoneTasks={hideDoneTasks} 
                    deleteTask={deleteTask}
                    toggleTaskDone={toggleTaskDone}
                    toggleTaskPriority={toggleTaskPriority}
                    editTaskContent={editTaskContent}
                    setIsTaskEdited={setIsTaskEdited}
                    setIsDueDateEdited={setIsDueDateEdited}
                    setTaskDueDate={setTaskDueDate}
                    />
                }

                buttons={
                    <Buttons 
                    tasks={tasks} 
                    hideDoneTasks={hideDoneTasks} 
                    toggleHidingDoneTasks={toggleHidingDoneTasks} 
                    setAllTasksAsDone={setAllTasksAsDone}
                    fetchExampleTasks={fetchExampleTasks}
                    />
                }
                />
        </Container>
        </>
    );
}

export default TasksList;