import React from 'react'

export const DeleteAlert = () => {
  return (
    <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-transparent blur-2xl">
      <div class="bg-white rounded-lg w-1/4 border">
        <div class="flex flex-col items-start p-4">
          <div class="flex items-center w-full border-b">
            <h4 class="text-red-500 font-semibold text-xl">Eliminar</h4>
          </div>
          <hr />
          <p class="my-4">Está seguro que desea eliminar?</p>
          <hr />
          <form class="ml-auto">
            <button
              class="hover:bg-gray-600 hover:border-gray-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="button"
            >
              No, cerrar
            </button>
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
              type="submit"
            >
              Eliminar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
