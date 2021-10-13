import { BrowserRouter as Router } from "react-router-dom";
import * as S from "./App.styles";
import Footer from "layout/Footer/Footer";
import NavBar from "layout/Navbar/Navbar";
import RouteConfig from "routes/RouteConfig";
const App = () => {
  return (
    <S.Container>
      <Router>
        <NavBar />
        <RouteConfig />
      </Router>
      <Footer />
    </S.Container>
  );
};

export default App;
