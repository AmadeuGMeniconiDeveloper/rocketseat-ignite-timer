import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global.styled";
import { darkTheme } from "./styles/theme/dark";
// import { lightTheme } from "./styles/theme/light";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}
