import { useFormik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import { register } from '../../helper/login';
import Swal from 'sweetalert2';

const initialValues = {
  email: "",
  password: ""
}

export const RegisterScreen = () => {

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await onSubmit(values)
    },
  });

  const onSubmit = async (values) => {
    const { email, password } = values
    if (password.length < 6) {
      Swal.fire({
        icon: 'info',
        title: 'La contraseña debe tener al menos 6 caracteres',
      })
      return
    }

    Swal.fire({
      title: 'Validando',
      didOpen: () => {
        Swal.showLoading()
      },
    })

    const data = await register({ email, password })
    if (!data) {
      Swal.fire({
        icon: 'error',
        title: 'Revise los datos ingresados',
      })
      return
    }
    const { token } = data;
    localStorage.setItem('token', JSON.stringify(token))
    Swal.fire({
      icon: 'success',
      title: 'Usuario creado',
    })
    formik.resetForm();

  }

  return (
    <div className="h-screen flex" style={{ backgroundColor: "#354152" }}>
      <form
        className="w-4/6 md:w-2/5 m-auto text-white text-center shadow-2xl px-8 py-4 flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <img
          className="w-1/2 mx-auto"
          src="https://camo.githubusercontent.com/85cf7e1a8b85221e81ba91cbce29c917b91a7390bb3ca06aa31cfd1eadd7fe60/68747470733a2f2f7777772e337269746563686e6f6c6f676965732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f31312f4d45524e2d537461636b2d547261696e696e672d696e2d50756e652d65313537353032323432373234342e706e67"
          alt=""
        />
        <h1 className="text-4xl font-medium my-4">
          REGISTRO
        </h1>
        <label
          className="font-light"
          htmlFor=""
        >
          Correo
          <input
            className="block rounded-full w-full h-8 p-4 text-center border-gray-600 border focus:outline-none"
            style={{ backgroundColor: "#354152" }}
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label
          className="font-light mt-2"
          htmlFor=""
        >
          Contraseña
          <input
            className="block rounded-full w-full h-8 p-4 text-center border-gray-600 border focus:outline-none"
            style={{ backgroundColor: "#354152" }}
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button className="my-6 bg w-full p-2 rounded-full"
          style={{ background: "linear-gradient(90deg, rgba(126, 219, 177, 1) 0%, rgba(65, 154, 131, 1) 100%)" }}
        >
          Registrarme
        </button>
        <p>
          ¿Ya estás registrado?&nbsp;
          <Link
            className="underline"
            to="/login"
          >
            Inicia sesion
          </Link>
        </p>
      </form>
    </div>
  )
}
