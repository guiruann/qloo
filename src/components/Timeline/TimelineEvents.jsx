// store
import { useTimeline } from "../../store/useTimeline";

export const TimelineEvents = () => {
  const { availableDates, daysAmount, events, updateEventName, zoom } =
    useTimeline();

  return (
    <div
      className="timeline-grid"
      style={{
        gridTemplateColumns: `repeat(${daysAmount}, calc(100% / ${
          daysAmount + zoom
        }))`,
      }}
    >
      {events.map((event) => {
        const startDateIndex = availableDates.indexOf(event.start) + 1;
        const endDateIndex = availableDates.indexOf(event.end) + 1;

        return (
          <div
            key={event.id}
            className="timeline-item"
            style={{
              gridColumn: `${startDateIndex} / ${endDateIndex}`,
            }}
          >
            <input
              type="text"
              value={event.name}
              onChange={(e) => updateEventName(event.id, e.target.value)}
              className="timeline-input"
            />
          </div>
        );
      })}
    </div>
  );
};
