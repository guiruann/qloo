import { createContext, useContext, useState } from "react";
import timelineItems from "../timelineItems";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [events, setEvents] = useState([...timelineItems]);
  const [zoom, setZoom] = useState(0);

  const handleZoomOut = () => setZoom((prevZoom) => Math.min(prevZoom + 1, 3));
  const handleZoomIn = () => setZoom((prevZoom) => Math.max(prevZoom - 1, -8));
  const handleResetZoom = () => setZoom(0);

  const updateEventName = (id, newName) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, name: newName } : event
      )
    );
  };

  let availableDates = [];

  events.map(({ start, end }) => {
    if (!availableDates.includes(start)) {
      availableDates.push(start);
    }

    if (!availableDates.includes(end)) {
      availableDates.push(end);
    }

    return availableDates.sort((a, b) => new Date(a) - new Date(b));
  });

  const daysAmount = availableDates.length;

  return (
    <TimelineContext.Provider
      value={{
        events,
        availableDates,
        daysAmount,
        updateEventName,
        zoom,
        handleZoomIn,
        handleZoomOut,
        handleResetZoom,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
