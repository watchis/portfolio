import { Box } from "@mui/system";
import "./App.css";
import Footer from "./components/footer";
import styled from "@emotion/styled";
import NavBar from "./components/navbar";
import "@fontsource/libre-barcode-128-text";
import "@fontsource-variable/lexend";
import { BackgroundColors } from "./consts/colors";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",

  background: BackgroundColors.Light,

  minHeight: "100vh",
  minWidth: "100vw",
  margin: 0,
});
