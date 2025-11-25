import React from "react";

type State = { hasError: boolean };
type Props = { children: React.ReactNode };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Something went wrong.
          </h2>
          <button
            className="px-6 py-3 bg-white text-black rounded-md font-medium mt-3"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
