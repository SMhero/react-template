import { Component, ErrorInfo } from "react";

type Props = {
  children: React.ReactNode;
  onError?: <T extends Record<string, unknown>>(data?: T) => void;
};

type State = {
  error: Error | null;
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  static defaultProps = {
    onError: undefined,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      error: null,
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(error, errorInfo);

    this.props?.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto my-0 h-screen w-full max-w-[588px]">
          <h1 className="mx-0 mb-6 mt-8 text-center">Something went wrong...</h1>
          {this.state.error ? (
            <div className="rounded-xl bg-red-600 p-4 text-center">
              <code className="text-white">Error: {this.state.error.message}</code>
            </div>
          ) : null}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
