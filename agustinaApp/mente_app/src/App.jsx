import { useEffect, useState } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { gapi } from "gapi-script";

// import ApiCalendar from "react-google-calendar-api";

function App() {
  const [events, setEvents] = useState([{ title: null, date: null }]);
  // TODO make function for calendar events out of larger event arrays

  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
  const API_KEY = import.meta.env.VITE_G_API_KEY;
  // const DISCOVERY_DOCS = [
  //   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  // ];
  // const SCOPE = "https://www.googleapis.com/auth/calendar.events";

  // TODO make events with larger info in the array
  const getEventsFromCalendar = async (calendarID, apiKey) => {
    async function initiate() {
      await gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(async function () {
          return await gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/`,
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 33,
            orderBy: "startTime",
          });
        })
        .then(
          (response) => {
            console.log(response.result.items);
            const events = response.result.items.map((e) => ({
              title: e.summary,
              date: e.start.dateTime,
            }));

            console.log(events);
            setEvents(events);
          },
          function (err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEventsFromCalendar(CALENDAR_ID, API_KEY);
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
