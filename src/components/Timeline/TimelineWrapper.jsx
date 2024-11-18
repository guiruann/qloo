// components
import { TimelineHeader } from "./TimelineHeader";
import { TimelineEvents } from "./TimelineEvents";
import { TimelineZoom } from "./TimelineZoom";

// styles
import "./Timeline.styles.css";

export const TimelineWrapper = () => {
  return (
    <div className="timeline-wrapper">
      <TimelineHeader />
      <TimelineEvents />
      <TimelineZoom />
    </div>
  );
};
