// store
import { useTimeline } from "../../store/useTimeline";

export const TimelineZoom = () => {
  const { handleZoomIn, handleZoomOut, handleResetZoom } = useTimeline();

  return (
    <div className="timeline-zoom" style={{}}>
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleResetZoom}>Reset zoom</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
    </div>
  );
};
