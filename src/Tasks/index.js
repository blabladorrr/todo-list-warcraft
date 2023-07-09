import { TasksWrapper, TaskItem, TaskContent, TaskButton, PriorityButton, TaskContentButton, TaskContentInput, DueDateButton, DueDateInput } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, deleteTask, toggleTaskDone, toggleTaskPriority, editTaskContent, setIsTaskEdited, setTaskDueDate, setIsDueDateEdited }) => {
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
                    { task.isDueDateEdited ? (
                            <DueDateInput
                                value={task.dueDate}
                                onChange={(event) => setTaskDueDate(task.id, event.target.value)}
                                onBlur={() => setIsDueDateEdited(task.id, false)}
                                autoFocus
                            />
                        ) : (
                            <DueDateButton
                                onClick={() => setIsDueDateEdited(task.id, true)}
                            >
                                Due: {(!(task.dueDate === "None")) ? 
                                        (new Date(task.dueDate)).toLocaleDateString(
                                            undefined, 
                                            {month: "long", weekday: "short", day: "numeric", year: "numeric"}) 
                                        : "None"}
                            </DueDateButton>

                        ) 
                    }
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