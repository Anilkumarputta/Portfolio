import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error for debugging in development only
    // In production, this should use a proper error logging service like Sentry
    if (import.meta.env.DEV) {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-10 text-center shadow-2xl glass-card">
            <div className="text-6xl mb-4 drop-shadow-neon">⚠️</div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-neon mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-cyan-200 mb-6">
              We apologize for the inconvenience. The application encountered an unexpected error.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-400 hover:from-cyan-300 hover:to-fuchsia-300 text-zinc-950 font-bold px-8 py-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 border border-cyan-400/40 tracking-wide text-lg drop-shadow-neon"
            >
              Reload Page
            </button>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-cyan-400 cursor-pointer mb-2">Error Details</summary>
                <pre className="text-xs text-red-400 bg-zinc-950 p-4 rounded overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
