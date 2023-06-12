import React from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { addDays } from "@fullcalendar/core/internal";
import "react-datepicker/dist/react-datepicker.css";

const Picker = ({ formData, startDate, handleDateChange }) => {
  const days = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "dd/mm/yyyy",
    },
  };

  const Mycontainer = ({ className, children }) => {
    return (
      <div
        // className="customDatePickerWidth"
        style={{
          padding: "3px",
          height: "302px",
          marginTop: "18px",
          // background: "#216ba5",
          // color: "#fff",
          // borderRadius: "4px",
        }}
      >
        <CalendarContainer className={className}>
          <div style={{ padding: "3px" }}>DÍA A REGISTRAR</div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <DatePicker
      className="date-picker"
      dateFormat="dd/MM/yyyy"
      locale={locale}
      maxDate={addDays(new Date(), 0)}
      name="date"
      value={formData.date}
      selected={startDate}
      onChange={handleDateChange}
      calendarContainer={Mycontainer}
      inline
      // size="xs"
    ></DatePicker>
  );
};

export default Picker;
