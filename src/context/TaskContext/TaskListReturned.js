import { useContext } from 'react';
import { TaskContext } from './TasksContext';
import { FilterContext } from './TasksContext';
import Tasks from '../../Tasks';


const TaskListReturned = () => {
  const { tasks } = useContext(TaskContext);
  const { filter } = useContext(FilterContext);

  const filteredTasks = tasks.filter((task) =>
    task.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
    {filteredTasks.map((task, id) => (
      // <li key={id}>{task.content}</li>
      // filteredTasks.map((task, id) => (
      <Tasks key={id} {...task} />
      // ))
    ))}
  </ul>
  );
};

export default TaskListReturned;
