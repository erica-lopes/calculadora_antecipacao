import Form from "../components/Calculator";
import Results from "../components/Results";
import { Container, Content } from "./style";

const Home = () => {
  return (
    <Container>
      <h1 class="animate__animated animate__pulse">Calculadora de antecipação</h1>
      <Content>
        <Form />
        <Results />
      </Content>
    </Container>
  );
};

export default Home;
