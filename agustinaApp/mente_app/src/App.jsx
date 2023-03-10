import { useEffect, useState } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { gapi } from "gapi-script";

// import ApiCalendar from "react-google-calendar-api";

function App() {
  const [events, setEvents] = useState([]);

  // const events = [{ title: "Agus", date: new Date() }];

  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
  const API_KEY = import.meta.env.VITE_G_API_KEY;
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPE = "https://www.googleapis.com/auth/calendar.events";

  const getEventsFromCalendar = async (calendarID, apiKey) => {
    async function initiate() {
      await gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(async function() {
          return await gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/`,
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 33,
            orderBy: "startTime",
          });
          //   return await gapi.client.calendar.events.list({
          //     calendarId: CALENDAR_ID,
          //     timeMin: new Date().toISOString(),
          //     showDeleted: false,
          //     singleEvents: true,
          //     orderBy: "startTime",
          //   });
          // })
          // .then((response) => {
          //   let events = response.result.items;
          //   console.log(events);
        })
        .then(
          (response) => {
            let events = response.result.items;
            events.map((e) => {
              e
                ? {
                    title: e.attendees,
                    date: e.start.DayTime,
                  }
                : e;
            });

            console.log(events);
            setEvents(events);
          },
          function(err) {
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEventsFromCalendar(CALENDAR_ID, API_KEY);
    // console.log(events);
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
