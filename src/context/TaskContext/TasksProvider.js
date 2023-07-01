import { TaskContext } from './TasksContext';
import { useTaskList } from '../../useTaskList';

const TasksProvider = ({ children }) => {

  const {
    tasks,
    addNewTask,
    } = useTaskList();

  return (
    <TaskContext.Provider value={{ tasks, addNewTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
