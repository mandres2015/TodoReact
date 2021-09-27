import React, { useContext, useEffect } from 'react'
import { BsTrash } from 'react-icons/bs';
import { deleteTask } from '../helper/deleteTask';
import { doneTask } from '../helper/doneTask';
import { TaskContext } from '../context/TaskContext';


export const ListTasks = ({ tasks, updateTasks }) => {

  const { newTask, setNewTask, resetNewTask } = useContext(TaskContext)

  const handleDelete = async (task, e) => {
    e.stopPropagation()
    await deleteTask(task)
    updateTasks()
    if (newTask.id === task.id)
      resetNewTask()
  }

  const handleView = (task, e) => {
    e.stopPropagation()
    setNewTask(task)
  }

  const handleChange = async (task, e) => {
    e.stopPropagation()
    await doneTask(task)
    updateTasks()
  }

  useEffect(() => {
    function handleResize() {
      const list = document.getElementById("listTask")
      if (list) {
        const height = window.innerHeight - 68
        list.style.height = `${window.innerHeight}px`
        list.style.maxHeight = `${height}px`
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="">
      {
        tasks?.map((task) => {
          return (
            <div
              key={task.id}
              className="flex my-2 cursor-pointer items-center border-b border-gray-100 hover:bg-gray-100 rounded px-4"
              onClick={(e) => handleView(task, e)}
              disabled={task.loading}
            >
              <input
                type="checkbox"
                name="status"
                className="mr-4"
                checked={task.done}
                onChange={(e) => handleChange(task, e)}
                onClick={(e) => e.stopPropagation()}
              />
              <p
                className={"w-full" + (task.done ? " line-through" : "")}
              >
                {task.title}
              </p>
              <BsTrash
                className="w-9 h-9 ml-1 hover:bg-gray-50 hover:text-red-500 p-2 rounded-full"
                onClick={(e) => handleDelete(task, e)}
              />
            </div>
          )
        })
      }
    </div>
  )
}