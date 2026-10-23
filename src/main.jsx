import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import UseRefExample from "./Components/SendDataPC/UseRefExample";
import Parent from "./Components/HooksExample/ContextAPIExample/Parent";
// import { BrowserRouter } from "react-router-dom";
// import App from "./RoutingExample/App";
// import BootstrapExample from "./Components/BootstrapExample";
// import UseEffectExample from "./Components/useEffectExample";
// import UseMemoExample from "./Components/UseMemoExample";
// import Parent from "./Components/SendDataCP/Parent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/* <UseMemoExample/> */}
  {/* <Parent/> */}
  {/* <UseRefExample/> */}
  <Parent/>
  </StrictMode>,
);
