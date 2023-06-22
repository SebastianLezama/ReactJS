import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { gapi } from "gapi-script";
import { getUserByEmail } from "../components/SupabaseClient";
import Modal from "../components/Modal";
import "./Calendar.css";
import { Box } from "@chakra-ui/react";
import esLocale from "@fullcalendar/core/locales/es";

function Calendar() {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState([]);

  const [logInfo, setLogInfo] = useState([]);

  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;
  const API_KEY = import.meta.env.VITE_G_API_KEY;

  const getEventsFromCalendar = async (calendarID, apiKey) => {
    // const dateMonth = new Date().getMonth();
    // console.log(dateMonth);
    async function initiate() {
      await gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(async function() {
          return await gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/`,
            params: {
              timeMin: new Date("03-01-2023").toISOString(),
              // timeMin: dateMonth.toString().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 300,
              orderBy: "startTime",
            },
          });
        })
        .then(
          (response) => {
            const events = response.result.items.map((e) => ({
              email: e.attendees ? e.attendees[0].email : null,
              title: e.summary,
              id: e.id,
              start: e.start.dateTime || e.start.date,
              end: e.end.dateTime || e.end.date,
              allDay: e.start.dateTime ? false : true,
              recurringEventId: e.recurringEventId,
              color: e.colorId,
              rrule: e.recurrence ? e.recurrence[0] : null,
            }));
            setEvents(events);
            return events;
          },
          function(err) {
            return [false, err];
          }
        );
    }
    await gapi.load("client", initiate);
  };

  useEffect(() => {
    const events = getEventsFromCalendar(CALENDAR_ID, API_KEY);
    setEvents(events);
  }, []);

  const eventClick = async (info) => {
    const currentEvent = events.find(
      (e) =>
        e.recurringEventId === info.event._def.publicId ||
        e.id === info.event._def.publicId
    );
    setLogInfo(await getUserByEmail("Log", currentEvent.email));
    console.log(await getUserByEmail("Log", currentEvent.email));
    setCurrentEvent(await getUserByEmail("Users", currentEvent.email));
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  return (
    <>
      {/* <div className="main-calendar"> */}
      <Box>
        <FullCalendar
          plugins={[
            dayGridMonth,
            timeGridPlugin,
            interactionPlugin,
            googleCalendarPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          locale={esLocale}
          selectable={true}
          editable={true}
          eventClick={eventClick}
          events={events}
          height="700px"
          width="100%"
          weekends={false}
          slotMinTime="10:00:00"
          slotMaxTime="21:00:00"
        />
      </Box>
      {/* </div> */}
      <Modal
        showModal={showModal}
        modalRef={modalRef}
        closeModal={closeModal}
        logInfo={logInfo}
        currentEvent={currentEvent}
      />
    </>
  );
}

export default Calendar;
