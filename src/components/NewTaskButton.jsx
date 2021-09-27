import React, { useContext, useEffect } from 'react'
import { BsPlus } from 'react-icons/bs'
import { AiOutlineSave } from 'react-icons/ai'
import { TaskContext } from '../context/TaskContext'
import { saveNewTask } from '../helper/saveNewTask'

export const NewTaskButton = ({ updateTasks, showHideNewTask }) => {

  const { newTask, resetNewTask, save, setSave } = useContext(TaskContext)

  const handleShowNewTask = () => {
    showHideNewTask(true)
    setSave(true)
  }

  const handleClick = async () => {
    showHideNewTask(false)
    setSave(false)
    await saveNewTask(newTask);
    resetNewTask()
    updateTasks()
  }

  useEffect(() => {
    if ((newTask.title.trim().length === 0)) {
      setSave(false)
      showHideNewTask(false)
    } else {
      setSave(true)
      showHideNewTask(true)
    }
  }, [newTask])

  return (
    <>
      {
        save
          ?
          <AiOutlineSave
            className="fixed bottom-10 right-10 w-14 h-14 p-2 ml-auto bg-green-500 text-white rounded-full cursor-pointer"
            onClick={handleClick}
          />
          :
          <BsPlus
            className="fixed bottom-10 right-10 w-14 h-14 ml-auto bg-primary-600 text-white rounded-full cursor-pointer md:invisible visible"
            onClick={handleShowNewTask}
          />
      }
    </>
  )
}
