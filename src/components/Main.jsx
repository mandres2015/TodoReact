import React, { useReducer, useEffect } from 'react'
import '../styles.css';
import { authReducer } from '../auth/authReducer';
import { AuthContext } from '../auth/AuthContext';
import { AppRouter } from '../routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const Main = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
