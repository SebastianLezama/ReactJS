import React, { useState } from "react";
import { supabase } from "../SupabaseClient";
import "./DailyLog.css";
import { useAuth } from "../../AuthContext";
import Picker from "../Picker";

const DailyLog = () => {
  const [startDate, setStartDate] = useState(new Date());
  const form = {
    date: { startDate },
    alegria: "0",
    enojo: "0",
    tristeza: "0",
    verguenza: "0",
    culpa: "0",
    frustracion: "0",
    ansiedad: "0",
    sorpresa: "0",
    otra: "",
    valor: "0",
    comentarios: "",
  };
  const [formData, setFormData] = useState(form);
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
    email,
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
    comentarios,
  }) => {
    try {
      const { error } = await supabase.from("Log").insert({
        date: date,
        email: email,
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
        comentarios: comentarios,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const newFormData = {
      ...formData,
      email: auth.userSession?.user?.email,
      date: startDate.toDateString(),
    };
    const answer = window.confirm("Seguro que desea registrar las emociones?");
    if (answer) {
      console.log(newFormData);
      await insertNewDailyLog(newFormData);
      setFormData(form);
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
      <form onSubmit={handleSubmit}>
        <div className="date-log">
          <Picker
            formData={formData}
            startDate={startDate}
            handleDateChange={handleDateChange}
          />
          <ul className="log">
            {emociones.map((e) => (
              <li key={e.name} className="log-border">
                <p>{e.name}</p>
                <select
                  name={e.name.toLowerCase()}
                  value={formData.e}
                  onChange={handleChange}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </li>
            ))}
            <div className="comment-log">
              <ul>
                <li className="log-border">
                  <input
                    type="text"
                    name="otra"
                    className="input-otra"
                    placeholder="Otra"
                    onChange={handleChange}
                    value={formData.otra}
                  />
                  <select
                    name="valor"
                    value={formData.valor}
                    onChange={handleChange}
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </li>
              </ul>
            </div>
          </ul>
          <div className="register-button">
            <input
              type="submit"
              className="flat-button button-margin"
              value="REGISTRAR EMOCIONES"
            />
          </div>
          <ul className="log-border">
            <p>Comentarios del día</p>
            <textarea
              className="comments"
              name="comentarios"
              onChange={handleChange}
              value={formData.comentarios}
            />
          </ul>
        </div>
      </form>
    </div>
  );
};

export default DailyLog;
