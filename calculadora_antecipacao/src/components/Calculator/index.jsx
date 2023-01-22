import { useForm } from "react-hook-form";
import Calculator from "./style";
import { useContext } from "react";
import { Context } from "../../contexts";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validators";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { calculating_advance } = useContext(Context);

  return (
    <>
      <Calculator onSubmit={handleSubmit(calculating_advance)}>
        <h2>Simule sua Antecipação</h2>
        <label htmlFor="amount">Informe o valor da venda *</label>
        <input
          type="text"
          placeholder="Ex: 1000"
          id="amount"
          {...register("amount")}
        />
        <span>{errors.amount?.message}</span>

        <label htmlFor="installments">Em quantas parcelas *</label>
        <input
          type="text"
          placeholder="Ex: 6"
          id="installments"
          {...register("installments")}
        />
        <small className="installments">Máximo de 12 parcelas</small>
        <span>{errors.installments?.message}</span>

        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input type="text" placeholder="Ex: 4" id="mdr" {...register("mdr")} />
        <span>{errors.mdr?.message}</span>

        <button>Calcular</button>
      </Calculator>
    </>
  );
};

export default Form;
