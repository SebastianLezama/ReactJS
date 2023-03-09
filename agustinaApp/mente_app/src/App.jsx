import { useEffect, useState } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { gapi } from "gapi-script";

function App() {
  const [events, setEvents] = useState([]);

  // const events = [{ title: "Agus", date: new Date() }];
  const calendarID = import.meta.env.VITE_CALENDAR_ID;
  const apiKey = import.meta.env.VITE_G_API_KEY;

  const getEventsFromCalendar = async (calendarID, apiKey) => {
    async function initiate() {
      await gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(async function() {
          return await gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/`,
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
  }, []);

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
