import React from 'react'
import { ListTasks } from './ListTasks'
import { BiLogOut } from 'react-icons/bi'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

export const Tasks = ({ tasks, setTasks, updateTasks }) => {

  const history = useHistory()

  const handleLogout = () => {
    Swal.fire({
      title: '¿Deseas cerrar sesión?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar sesion'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        history.replace("/login");
      }
    })
  }

  return (
    <div className="pt-4">
      <div className="flex items-center">
        <button
          className="absolute text-rose-500 p-2"
          type="button"
          onClick={handleLogout}
        >
          <BiLogOut className="text-xl" />
        </button>
        <h1 className="text-3xl mx-auto">TAREAS</h1>
      </div>
      <hr className="mb-2" />
      <div
        id="listTask"
        className="task-container">
        {tasks && tasks.length > 0
          ?
          <ListTasks key={1} tasks={tasks} setTasks={setTasks} updateTasks={updateTasks} />
          :
          <p className="text-center text-gray-300 text-2xl my-10">No hay tareas aún</p>
        }
      </div>
    </div>
  )
}
