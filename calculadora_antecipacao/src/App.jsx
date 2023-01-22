import ContextProvider from "./contexts";
import Router from "./routes";

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  );
}

export default App;
