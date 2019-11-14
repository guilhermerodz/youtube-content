import React from "react";

import ThemeProvider from "./context/Theme";
import CountProvider from "./context/Count";

import Container from "./components/Container";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />

          <hr />

          <Mirror />
        </Container>
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;
