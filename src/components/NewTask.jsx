import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs'
import { BiArrowBack } from "react-icons/bi";
import TextareaAutosize from 'react-textarea-autosize';
import { saveNewTask } from '../helper/saveNewTask';
import { TaskContext } from '../context/TaskContext';
import { dateFormat } from '../helper/date';

export const NewTask = ({ updateTasks, showHideNewTask }) => {

  const alarmState = false;

  const { newTask, setNewTask, resetNewTask, setSave } = useContext(TaskContext)

  const [showAlarm, setShowAlarm] = useState(false)

  const { title, description, date, time } = newTask

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveTask()
  }

  const saveTask = async () => {
    if (title.trim().length > 0) {
      if (showAlarm)
        await saveNewTask(newTask)
      else
        await saveNewTask({
          ...newTask,
          date: "",
          time: ""
        })

      resetNewTask()
      updateTasks()
    }
  }

  const handleDelete = () => {
    resetNewTask()
    showHideNewTask(false)
    setSave(false)
  }

  const handleChange = ({ target }) => {
    setNewTask({
      ...newTask,
      [target.name]: target.value
    })
  }


  const showHideAlarm = () => {
    setShowAlarm(!showAlarm)
  }

  // const showHideTask = () => {
  //   showHideNewTask(true)
  // }


  useEffect(() => {
    if (!newTask.date)
      setShowAlarm(false)
    else
      setShowAlarm(true)

  }, [newTask.id])

  return (
    <div className="pt-4">
      <div className="relative">
        {
          newTask.id.length > 0
            ?
            <>
              <h2 className="text-3xl text-center">DESCRIPCION</h2>
              <AiOutlineClose
                className="absolute left-0 my-auto top-0 bottom-0 w-9 h-9 cursor-pointer p-2 text-gray-600 
                hover:bg-gray-300 rounded-full transition delay-75 duration-500 ease-in-out"
                onClick={handleDelete}
              />
              {alarmState && <BsBell
                className={`${showAlarm && "bg-gray-200"} absolute right-0 my-auto top-0 bottom-0 w-9 h-9 
                cursor-pointer p-2 text-gray-600 hover:bg-gray-300 rounded-full transition delay-75 duration-500 ease-in-out`}
                onClick={showHideAlarm}
              />
              }
            </>
            :
            <>
              <BiArrowBack
                className="absolute left-0 my-auto top-0 bottom-0 w-9 h-9 cursor-pointer p-2 text-gray-600 
                hover:bg-gray-300 rounded-full transition delay-75 duration-500 ease-in-out block md:hidden"
                onClick={handleDelete}
              />
              <h2 className="text-3xl text-center">NUEVA TAREA</h2>
              {alarmState && <BsBell
                className={`${showAlarm && "bg-gray-200"} absolute right-0 my-auto top-0 bottom-0 w-9 h-9 
                cursor-pointer p-2 text-gray-600 hover:bg-gray-300 rounded-full transition delay-75 duration-500 ease-in-out`}
                onClick={showHideAlarm}
              />
              }
            </>
        }
      </div>
      <hr className="mb-2" />
      {
        showAlarm &&
        <div
          id="alarmDiv"
          className=""
        >
          <>
            < input
              id="date"
              name="date"
              type="date"
              min={dateFormat(new Date())}
              className="bg-gray-100 rounded p-2 mr-2 cursor-pointer"
              onChange={handleChange}
              value={date}
            />
            <input
              id="time"
              name="time"
              type="time"
              className="bg-gray-100 rounded p-2 cursor-pointer "
              onChange={handleChange}
              value={time}
            />
          </>
        </div>
      }
      <form
        id="formTask"
        className="task-container pr-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          className="text-xl font-medium my-4 w-full ring-0 focus:ring-0 border-0 focus:border-0 outline-none"
          autoComplete="off"
          placeholder="Tarea"
          onChange={handleChange}
          value={title}
        >

        </input>
        <TextareaAutosize
          type="text"
          name="description"
          minRows={1}
          className="w-full border-none resize-none focus:border-none outline-none"
          placeholder="Puedes agregar más información sobre la tarea"
          onChange={handleChange}
          value={description}
        >

        </TextareaAutosize>
      </form>
    </div>
  )
}
