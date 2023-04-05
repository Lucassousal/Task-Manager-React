import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
import style from'./App.module.scss';

function App() {
  
  const storageTask = ():ITask[] => {
    const storage = localStorage.getItem('tasks')
    
    if(storage){
      const storageTasks = JSON.parse(storage)
      return storageTasks
    } else{
      const storageTasks:ITask[] = []
      return storageTasks
    }
  
  }
  
  const [tasks, setTasks] = useState <ITask[]> (storageTask);
  
  const [selected, setSelected] = useState<ITask>();

  useEffect(() => {
    const localTasks = [...tasks]
    localStorage.setItem('tasks',JSON.stringify(localTasks))
  },[tasks])


  function selectTask( selectedTask: ITask){
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map( task => (
        {
          ...task,
          selected : task.id === selectedTask.id ? true : false
        }
      )))
  }

  function endTask() {
    if(selected){
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(tasks => {
        if(tasks.id === selected.id){
          return {
            ...tasks,
            selected: false,
            completed: true
          }
        }
        return tasks;
      }))
    }
  }

  function excludeTask(selectedTask:ITask) {
    const newTasks = tasks.filter(task => task.id !== selectedTask.id)
    setTasks(newTasks)
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask} 
        excludeTask={excludeTask}
      />
      <Timer 
      selected={selected}
      endTask={endTask}
      />
    </div>
  );
};

export default App;
