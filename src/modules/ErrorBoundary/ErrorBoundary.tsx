import { Component, ErrorInfo } from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  error: Error | null;
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: null,
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong...</h1>
          {this.state.error ? (
            <div>Error: {this.state.error.message}</div>
          ) : null}
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
