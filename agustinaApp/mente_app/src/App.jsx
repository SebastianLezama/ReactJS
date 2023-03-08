import { useEffect, useState } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { gapi } from "gapi-script";
import * as dotenv from "dotenv";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

dotenv.config();

function App() {
  const [events, setEvents] = useState([]);

  // const events = [{ title: "Agus", date: new Date() }];
  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_G_API_KEY;

  const getEventsFromCalendar = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function() {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            return events;
          },
          function(err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEventsFromCalendar(calendarID, apiKey);
    console.log(events);
    setEvents(events);

    return () => {
      second;
    };
  }, [third]);

  return (
    <div className="Calendar">
      <FullCalendar
        defaultView="timeGridWeek"
        plugins={[timeGridPlugin]}
        events={events}
        height="100%"
        width="100%"
        weekends={false}
        slotMinTime="09:00:00"
        slotMaxTime="21:00:00"
      />
    </div>
  );
}

export default App;
