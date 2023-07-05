import { TasksWrapper, TaskItem, TaskContent, TaskButton, PriorityButton } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, deleteTask, toggleTaskDone, toggleTaskPriority }) => (
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
                    {task.content}
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

export default Tasks;