import { createContext, useState } from "react";
import api from "../services/api";
import  { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [defaultApi, setDefaultApi] = useState([]);

  const calculating_advance = async (data) => {

    await api
      .post("", data)
      .then((response) => {
        setDefaultApi(response.data);
        toast.success("Calculo efetuado com sucesso!", {
          className: 'toast-message'
      });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro no calculo.Tente novamente", {
          position: toast.POSITION.BOTTOM_CENTER
      });
      });
  };

  return (
    <Context.Provider value={{ defaultApi, calculating_advance }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
