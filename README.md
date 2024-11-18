# Timeline Visualization Component

## Overview

This project implements a **timeline visualization component** where events are displayed in a compact and space-efficient manner. The component allows for the following functionalities:

- **Zoom In and Out**: Adjust the timeline view to focus on smaller or larger date ranges.
- **Inline Editing**: Update the name of events directly on the timeline.

---

## How to run

This project uses node 16.

1. Run `npm install` to install the dependencies
1. Run `npm start` to start the development server
1. Project will be running at http://localhost:3000

## Time Spent

I spent approximately **4.5 hours** on this assignment, including:

- Understanding the requirements.
- Setting up the project structure.
- Implementing the core features and improvements.
- Refining the UI and functionality.

---

## What I Like About the Implementation

- **As simple as possible**: I focused on using the base code without adding any extra libraries. My goal was to create the simplest possible solution that met all the requirements.
- **Modular Design**: The timeline is divided into components (`TimelineWrapper`, `TimelineHeader`, `TimelineEvents`, `TimelineZoom`), making the code easier to read and maintain.

---

## What I Would Change If I Were to Do It Again

- **Layout improvements**: Organizing layout items in a different way.
- **Customization Options**: Add support for customizable event colors, labels, and durations to make the component more reusable.
- **Drag and drop functionality**: While I attempted an initial implementation, it was not up to the quality I envisioned for this challenge. If I had more time, I would refine it to ensure precise interaction and smooth integration with the grid.

---

## How I Made My Design Decisions

1. **Grid-Based Layout**: I opted for CSS Grid for positioning due to its ability to handle complex layouts with minimal code. This choice ensured proper alignment of events with dates.
2. **Zoom and Responsiveness**: I focused on creating a fluid and scrollable UI to ensure the timeline scales effectively at different zoom levels.
3. **Research and taking inspirations**: I looked at examples like Google Calendar for column design and took inspiration from similar tools for event alignment and zoom functionality.

---

## How I Would Test This If I Had More Time

1. **Unit Tests**: Test individual components to ensure they render correctly based on props and state.
1. **End-to-End Tests**: Use tools like Cypress or Playwright to simulate user interactions such as zooming in and out or editing event names.
1. **Multiple data inputs**: The current dataset (`timelineItems.js`) contains 14 objects. Testing the application with larger datasets and edge cases would help uncover performance bottlenecks or layout inconsistencies.

---
