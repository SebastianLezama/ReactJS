import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

function App() {
  const events = [{ title: "Agus", date: new Date() }];

  return (
    <div className="Calendar">
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[timeGridPlugin]}
        events={events}
        height="100%"
        width="100%"
        weekends={false}
        slotMinTime="08:00:00"
        slotMaxTime="21:00:00"
      />
    </div>
  );
}

export default App;
