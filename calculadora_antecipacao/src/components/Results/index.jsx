import { useContext } from "react";
import { Context } from "../../contexts";
import { Content } from "./style";

const Results = () => {
  const { defaultApi } = useContext(Context);
  return (
    <Content>
      <h3>VOCÊ RECEBERÁ:</h3>

      <p>
        Amanhã:
        <strong>
          {" "}
          R${" "}
          {defaultApi.length === 0 ? "0,00" : Number(defaultApi[1]).toFixed(2)}
        </strong>
      </p>

      <p>
        Em 15 dias:
        <strong>
          {" "}
          R${" "}
          {defaultApi.length === 0 ? "0,00" : Number(defaultApi[15]).toFixed(2)}
        </strong>
      </p>

      <p>
        Em 30 dias:
        <strong>
          {" "}
          R${" "}
          {defaultApi.length === 0 ? "0,00" : Number(defaultApi[30]).toFixed(2)}
        </strong>
      </p>

      <p>
        Em 90 dias:
        <strong>
          {" "}
          R${" "}
          {defaultApi.length === 0 ? "0,00" : Number(defaultApi[90]).toFixed(2)}
        </strong>
      </p>
    </Content>
  );
};

export default Results;
