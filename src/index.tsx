import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "components/App/App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
const renderApp = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

renderApp();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./components/App/App", () => {
    renderApp();
  });
}
