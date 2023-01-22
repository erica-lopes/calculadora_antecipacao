import { createContext, useState } from "react";
import api from "../services/api";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [defaultApi, setDefaultApi] = useState([]);

  const calculating_advance = async (data) => {
    await api
      .post("", data)
      .then((response) => {
        setDefaultApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Context.Provider value={{ defaultApi, calculating_advance }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
