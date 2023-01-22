import { useForm } from "react-hook-form";
import Calculator from "./style";
import { useContext } from "react";
import { Context } from "../../contexts";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const { calculating_advance } = useContext(Context);

  return (
    <>
      <h2>Simule agora sua Antecipação</h2>
      <Calculator onSubmit={handleSubmit(calculating_advance)}>
        <label htmlFor="amount">Informe o valor da venda *</label>
        <input type="text" id="amount" {...register("amount")} />

        <label htmlFor="installments">Em quantas parcelas *</label>
        <input type="text" id="installments" {...register("installments")} />

        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input type="text" id="mdr" {...register("mdr")} />

        <button>Calcular</button>
      </Calculator>
    </>
  );
};

export default Form;
