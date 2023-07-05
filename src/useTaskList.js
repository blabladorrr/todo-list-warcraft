import { useState, useEffect } from "react";

export const useTaskList = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  const [ tasks, setTasks ] = useState(
    tasksFromLocalStorage ? 
    JSON.parse(tasksFromLocalStorage) :
      [
        {id: 1, priority: 2, content: "buy a milk", done: false},
        {id: 2, priority: 1, content: "take a dog to vet", done: true},
      ]
    );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done};
      }
      return task;
    }));
  }

  const toggleTaskPriority = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, priority: (task.priority + 1) % 5}
      }
      return task;
    }))
  }

  const setAllTasksAsDone = () => {
    setTasks(tasks => tasks.map(task => (
        {
          ...task, 
          done: true
        }
      )));
  }

  const addNewTask = (content) => {
    if (content !== "") {
      setTasks(tasks =>
        [
          ...tasks,
          {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            priority: 4,
            content,
            done: false,
          },
        ]
      )
    }
  }

  const fetchExampleTasks = () => {
    fetch("./exampleToDoTasks.json")
      .then(response => response.json()
      .then(tasks => tasks.map(task => addNewTask(task.content))));
  }

  return {
    tasks, 
    addNewTask, 
    toggleTaskDone, 
    toggleTaskPriority, 
    setAllTasksAsDone, 
    deleteTask,
    fetchExampleTasks
  };
}