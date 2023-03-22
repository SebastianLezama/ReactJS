import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";
import React from "react";
import "./Modal.css";
import CustomView from "./CustomPlugin";

const Modal = ({ showModal, logInfo, modalRef, closeModal, currentEvent }) => {
  const days = logInfo.length;

  const logEvents = logInfo.map((e) => ({
    email: e.email,
    title: e.comentario,
    id: e.user_id,
    start: new Date(e.date).toISOString(),
    end: new Date(e.date).toISOString(),
    allDay: true,
  }));

  // TODO ver de usar los metodos day de Date, para mostrar en una grid de semana
  return (
    <>
      {showModal && (
        <div className="cardDetail" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            <div className="divModal">
              {currentEvent[0].name}
              <div className="logList">
                {logInfo.map((e) => (
                  <div key={e.date}>
                    {e.date} - Alegría: {e.alegria} - Enojo: {e.enojo} -
                    Tristeza: {e.tristeza} - Verguenza: {e.verguenza} - Culpa:{" "}
                    {e.culpa} - Frustración: {e.frustracion} - Ansiedad:{" "}
                    {e.ansiedad} - Sorpresa: {e.sorpresa} - Comentario:{" "}
                    {e.comentario}
                  </div>
                ))}
                {/* <FullCalendar
                  plugins={[
                    dayGridMonth,
                    timeGridPlugin,
                    interactionPlugin,
                    googleCalendarPlugin,
                    listPlugin,
                  ]}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  initialView="listWeek"
                  selectable={true}
                  editable={true}
                  eventClick={closeModal}
                  events={logEvents}
                  height="100%"
                  width="100%"
                  weekends={false}
                  slotMinTime="09:00:00"
                  slotMaxTime="19:00:00"
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
