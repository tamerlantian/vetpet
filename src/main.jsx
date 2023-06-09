import "./index.css";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./contexts/ContextProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </ChakraProvider>
);
