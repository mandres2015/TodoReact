import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { TaskContext } from '../context/TaskContext';
import { ContainerScreen } from "../components/ContainerScreen";
import { types } from "../types/types";
import { AuthContext } from "../auth/AuthContext";

const initialState = {
  id: "",
  title: "",
  description: "",
  date: "",
  time: "",
  done: false,
  loading: false,
}
export const DashboardRoutes = () => {

  const [newTask, setNewTask] = useState(initialState)
  const [save, setSave] = useState(false)
  const { dispatch } = useContext(AuthContext);

  const resetNewTask = () => {
    setNewTask(initialState)
  }

  try {
    const token = JSON.parse(localStorage.getItem("token"))
    if (!token) {
      dispatch({
        type: types.logout,
        payload: {},
      });
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <>
        <Switch>
          <TaskContext.Provider value={{
            newTask,
            setNewTask,
            resetNewTask,
            save,
            setSave
          }}>
            <Route exact path="/" component={ContainerScreen} />
          </TaskContext.Provider>
        </Switch>
    </>
  );
};
