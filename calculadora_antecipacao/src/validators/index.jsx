import * as yup from "yup";

export const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Apenas números")
    .required("Campo obrigatório"),
  installments: yup
    .number()
    .typeError("Apenas números de 1 a 12")
    .min(1)
    .max(12)
    .required("Campo obrigatório"),
  mdr: yup
    .number()
    .typeError("Apenas números")
    .min(1)
    .required("Campo obrigatório"),
});
