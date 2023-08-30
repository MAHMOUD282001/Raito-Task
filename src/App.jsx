import {
  Box,
  Container,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import exchangeImg from "./assets/exchange.jpg";

import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1400,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="home">
        <Container>
          <img className="exchange-img" src={exchangeImg} alt="Exchange Img" />
          <Services />
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
