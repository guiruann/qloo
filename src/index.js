import React from "react";
import { render } from "react-dom";

// components
import Container from "./components/Container";
import Timeline from "./components/Timeline";

// styles
import "./index.css";
import { TimelineProvider } from "./store/useTimeline";

const App = () => (
  <TimelineProvider>
    <Container>
      <div>
        <h1>Events Timeline</h1>
      </div>
      <Timeline />
    </Container>
  </TimelineProvider>
);

render(<App />, document.getElementById("root"));
