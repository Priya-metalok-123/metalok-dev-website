import React, { Component } from "react";

class VideoPlayerErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("Error caught by VideoPlayerErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom fallback UI here
      return <h1>Something went wrong with the video player.</h1>;
    }

    return this.props.children;
  }
}

export default VideoPlayerErrorBoundary;
