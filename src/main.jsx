import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./RoutingExample/App";
// import BootstrapExample from "./Components/BootstrapExample";
import UseEffectExample from "./Components/useEffectExample";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <UseEffectExample/>
  </StrictMode>,
);
