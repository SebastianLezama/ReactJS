import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import React from "react";
import "./Modal.css";
import CustomView from "./CustomPlugin";

const Modal = ({ showModal, logInfo, modalRef, closeModal, currentEvent }) => {
  const days = logInfo.length;

  const logEvents = logInfo.map((e) => ({
    email: e.email,
    title: e.name,
    id: e.user_id,
    start: Date(e.date),
    allDay: true,
  }));

  return (
    <>
      {showModal && (
        <div className="cardDetail" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            <div className="divModal">
              {currentEvent[0].name}
              <div className="calendar">
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
                  selectable={true}
                  editable={true}
                  eventClick={closeModal}
                  events={logEvents}
                  height="100%"
                  width="100%"
                  weekends={false}
                  slotMinTime="09:00:00"
                  slotMaxTime="17:00:00"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
