import { TasksWrapper, TaskItem, TaskContent, TaskButton, PriorityButton, TaskContentButton, TaskContentInput } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, deleteTask, toggleTaskDone, toggleTaskPriority, editTaskContent, setIsTaskEdited }) => {
    const setIsEditedProperty = (id) => {
        setIsTaskEdited(id, true);
    }

    const onKeyPress = (event, id) => {
        if (event.key === "Enter") {
            setIsTaskEdited(id, false);
        }
    }

    return(
        <TasksWrapper>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    hidden={task.done && hideDoneTasks}
                >
                    <TaskButton
                        toggleDone
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✓" : ""}
                    </TaskButton>
                    <PriorityButton 
                        onClick={() => toggleTaskPriority(task.id)}
                        priority={task.priority}
                    >
                        !
                    </PriorityButton>
                    <TaskContent
                        done={task.done}
                    >
                        { task.isEdited ? (
                                <TaskContentInput
                                    value={task.content}
                                    onChange={(event) => editTaskContent(task.id, event.target.value)}
                                    onBlur={() => setIsTaskEdited(task.id, false)}
                                    onKeyPress={(event) => onKeyPress(event, task.id)}
                                    autoFocus
                                />
                            ) : (
                                <TaskContentButton
                                    done={task.done}
                                    onClick={() => setIsEditedProperty(task.id)}
                                >
                                    {task.content}
                                </TaskContentButton>
                            )
                        }
                    </TaskContent>
                    <TaskButton
                        remove 
                        onClick={() => deleteTask(task.id)}
                    >
                        🗑
                    </TaskButton>
                </TaskItem>
            ))}
        </TasksWrapper>
    );
}

export default Tasks;