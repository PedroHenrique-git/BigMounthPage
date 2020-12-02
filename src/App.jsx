import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, Container } from "./styles/globalStyles";
import Routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
