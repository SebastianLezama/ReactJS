import React, { useState } from "react";
import { supabase } from "../SupabaseClient";
import "./DailyLog.css";
import { useAuth } from "../../AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "@fullcalendar/core/internal";

const DailyLog = () => {
  const [formData, setFormData] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const auth = useAuth();

  const emociones = [
    { name: "Alegria" },
    { name: "Enojo" },
    { name: "Tristeza" },
    { name: "Verguenza" },
    { name: "Culpa" },
    { name: "Frustracion" },
    { name: "Ansiedad" },
    { name: "Sorpresa" },
  ];

  const insertNewDailyLog = async ({
    date,
    alegria,
    enojo,
    tristeza,
    verguenza,
    culpa,
    frustracion,
    ansiedad,
    sorpresa,
    otra,
    valor,
    comentario,
  }) => {
    try {
      const { error } = await supabase.from("Log").insert({
        date: date,
        email: auth.userSession.email,
        alegria: alegria,
        enojo: enojo,
        tristeza: tristeza,
        verguenza: verguenza,
        culpa: culpa,
        frustracion: frustracion,
        ansiedad: ansiedad,
        sorpresa: sorpresa,
        otra: otra,
        valor: valor,
        comentario: comentario,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const answer = window.confirm("Seguro?");
    const newFormData = {
      ...formData,
      email: auth.userSession?.email,
      date: startDate.toDateString(),
    };
    if (answer) {
      await insertNewDailyLog(newFormData);
      console.log(newFormData);
      const session = auth.userSession?.user?.email;
      console.log("sesssssion", session);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDateChange = (date) => {
    setStartDate(date);

    // setFormData({
    //   ...formData,
    //   date: startDate,
    // });
  };

  return (
    <div className="daily-log">
      <div>Registro de Emociones</div>
      <div>
        <form onSubmit={handleSubmit}>
          <DatePicker
            className="date-picker"
            dateFormat="dd/MM/yyyy"
            maxDate={addDays(new Date(), 0)}
            name="date"
            value={formData.date}
            selected={startDate}
            onChange={handleDateChange}
          ></DatePicker>
          <ul className="log">
            {emociones.map((e) => (
              <li key={e.name}>
                <p>{e.name}</p>
                <select name={e.name.toLowerCase()} onChange={handleChange}>
                  <option value={formData.e}>0</option>
                  <option value={formData.e}>1</option>
                  <option value={formData.e}>2</option>
                  <option value={formData.e}>3</option>
                  <option value={formData.e}>4</option>
                  <option value={formData.e}>5</option>
                </select>
              </li>
            ))}
          </ul>
          <ul>
            <li></li>
            <li>
              <input
                type="text"
                name="otra"
                placeholder="Otra"
                onChange={handleChange}
                value={formData.otra}
              />
              <select name="valor" onChange={handleChange}>
                <option value={formData.valor}>0</option>
                <option value={formData.valor}>1</option>
                <option value={formData.valor}>2</option>
                <option value={formData.valor}>3</option>
                <option value={formData.valor}>4</option>
                <option value={formData.valor}>5</option>
              </select>
            </li>
            <p>Comentarios</p>
            <input
              type="text"
              name="comentarios"
              onChange={handleChange}
              value={formData.comentarios}
            />
          </ul>
          <input type="submit" className="flat-button" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default DailyLog;
