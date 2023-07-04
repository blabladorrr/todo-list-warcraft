import { TasksWrapper, TaskItem, TaskContent, TaskButton } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, deleteTask, toggleTaskDone }) => (
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