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

  const getEventsFromCalendar = async (CALENDAR_ID, API_KEY) => {
    async function initiate() {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CALENDAR_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPE,
      });
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEventsFromCalendar(CALENDAR_ID, API_KEY);
    console.log(events);
    setEvents(events);
  }, []);

  gapi.client.calendar.events
    .list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 20,
      orderBy: "startTime",
    })
    .then((response) => {
      const events = response.result.items;
      console.log("events: ", events);
    });

  // const calConfig = {
  //   clientId: `${calendarID}`,
  //   apiKey: `${apiKey}`,
  //   scope: "https://www.googleapis.com/auth/calendar.events",
  //   discoveryDocs: [
  //     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  //   ],
  // };

  // const apiCalendar = new ApiCalendar(calConfig);
  // apiCalendar.handleAuthClick();

  // const getEventsFromCalendar = async () => {
  //   await apiCalendar
  //     .listEvents(
  //       {
  //         maxResults: 10,
  //         orderBy: "updated",
  //       },
  //       calendarID
  //     )
  //     .then((result) => {
  //       console.log(result.items);
  //       return result.items;
  //     });
  // };

  // useEffect(() => {
  //   const events = getEventsFromCalendar();
  //   console.log(events);
  //   setEvents(events);
  // }, []);

  // const getEventsFromCalendar = async (calendarID, apiKey) => {
  //   async function initiate() {
  //     await gapi.client
  //       .init({
  //         apiKey: apiKey,
  //       })
  //       .then(async function() {
  //         return await gapi.client.request({
  //           path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/`,
  //         });
  //       })
  //       .then(
  //         (response) => {
  //           let events = response.result.items;
  //           setEvents(events);
  //         },
  //         function(err) {
  //           return [false, err];
  //         }
  //       );
  //   }
  //   gapi.load("client", initiate);
  // };

  // useEffect(() => {
  //   const events = getEventsFromCalendar(calendarID, apiKey);
  //   console.log(events);
  //   setEvents(events);
  // }, []);

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
