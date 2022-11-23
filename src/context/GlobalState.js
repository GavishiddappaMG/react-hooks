import React, { useReducer, createContext } from "react";

import appReducer from "./AppReducer";

const intialState = {
  employees: [
    {
      id: 1,
      name: 'Sammy',
      location: 'DigitalOcear',
      designation: 'Shark'
    }
  ]
}

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, intialState);

  function addEmployee(emplyee) {
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: emplyee
    })
  }

  function editEmployee(employee) {
    dispatch({
      type: 'EDIT_EMPLOYEE',
      payload: employee
    })
  }

  function removeEmployee(id) {
    dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee
      }}
    >
      { children }
    </GlobalContext.Provider>
  );
};
