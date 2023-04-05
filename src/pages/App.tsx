import React from 'react';
import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
import style from'./App.module.scss';

function App() {
  const [tasks, setTasks] = useState <ITask[]> ([]);
  
  const [selected, setSelected] = useState<ITask>();

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
