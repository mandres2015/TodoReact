import React, { useContext, useEffect, useState } from 'react'
import { NewTask } from './NewTask'
import { NewTaskButton } from './NewTaskButton'
import { Tasks } from './Tasks'
import { getTasks } from '../helper/getTasks';
import { getToken } from '../helper/token';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const ContainerScreen = () => {

  const [tasks, setTasks] = useState([])
  const { dispatch } = useContext(AuthContext);


  const updateTasks = () => {
    const token = getToken();
    if (!token)
      dispatch({
        type: types.logout,
        payload: {},
      });
    getTasks().then((tasks) => {
      setTasks(tasks);
    })
  }

  useEffect(() => {
    updateTasks()
  }, []);

  const showHideNewTask = (show = false) => {
    const { innerWidth: width } = window;
    const newTaskDiv = document.querySelector('#newTaskDiv')
    const tasksDiv = document.querySelector('#tasksDiv')
    if (tasksDiv && newTaskDiv)
      if (width <= 768) {
        if (show) {
          newTaskDiv.classList.remove("hidden", "md:block")
          tasksDiv.hidden = true
        }
        else {
          newTaskDiv.classList.add("hidden", "md:block")
          tasksDiv.hidden = false
        }
      } else {
        newTaskDiv.classList.remove("hidden", "md:block")
        tasksDiv.hidden = false
      }
  }

  window.addEventListener('resize', showHideNewTask)

  return (
    <div id="container" className="container mx-auto max-h-screen">
      <div className="grid grid-cols-5 justify-center">
        <div
          id="tasksDiv"
          className="col-span-5 md:col-span-3 mx-4"
        >
          <Tasks tasks={tasks} setTasks={setTasks} updateTasks={updateTasks} />
        </div>
        <div
          id="newTaskDiv"
          className="col-span-5 md:col-span-2 mx-4 "
        >
          <NewTask updateTasks={updateTasks} showHideNewTask={showHideNewTask} />
        </div>
      </div>
      <NewTaskButton updateTasks={updateTasks} showHideNewTask={showHideNewTask} />
    </div>
  )
}
