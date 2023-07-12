import React from "react";
import Router from "./routes/Router";

import { GlobalState } from "./global/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <GlobalStyled />

        <Router />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
