import React, { createContext, useState, useContext } from 'react';

const Context = createContext();

export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const value = {
    username,
    setUsername,
    secret,
    setSecret
  };

  return <Context.Provider value={value} >{props.children}</Context.Provider>
};

export const useThisContext = () => useContext(Context);
