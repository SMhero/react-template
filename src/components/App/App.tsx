import ErrorBoundary from "modules/ErrorBoundary/ErrorBoundary";
import Template from "components/Template/Template";

const App = () => {
  return (
    <ErrorBoundary>
      <Template />
    </ErrorBoundary>
  );
};

export default App;
