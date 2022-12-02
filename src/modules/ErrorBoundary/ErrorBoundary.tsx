import { Component, ErrorInfo } from "react";

import styles from "./styles.css";

type Props = {
  children: React.ReactNode;
  onError?: (data?: Record<string, unknown>) => void;
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

  static defaultProps: Pick<Props, "onError"> = {
    onError: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(error, errorInfo);

    this.props?.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.root}>
          <h1 className={styles.title}>Something went wrong...</h1>
          {this.state.error ? (
            <div className={styles.description}>
              <code className={styles.code}>
                Error: {this.state.error.message}
              </code>
            </div>
          ) : null}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
