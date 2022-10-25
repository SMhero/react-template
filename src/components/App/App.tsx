import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import Example from "components/Example/Example";

const App = () => {
  return (
    <ErrorBoundary>
      <Example />
    </ErrorBoundary>
  );
};

export default App;
