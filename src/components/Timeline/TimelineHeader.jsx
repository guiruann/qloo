// store
import { useTimeline } from "../../store/useTimeline";

// utils
import { dateFormatter } from "../../utils/dateFormatter";

export const TimelineHeader = () => {
  const { availableDates, daysAmount, zoom } = useTimeline();

  return (
    <div
      className="timeline-header timeline-grid"
      style={{
        gridTemplateColumns: `repeat(${daysAmount}, calc(100% / ${
          daysAmount + zoom
        }))`,
      }}
    >
      {availableDates.map((date, index) => (
        <div key={`${date}-${index}`} className="timeline-header-item">
          <div className="timeline-header-border"></div>
          <p>{dateFormatter(date)}</p>
        </div>
      ))}
    </div>
  );
};
