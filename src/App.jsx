import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Cabecalho from "./components/Header";

import Routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Cabecalho />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
