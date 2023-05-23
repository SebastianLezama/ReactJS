import React, { useState } from "react";
import { supabase } from "../SupabaseClient";
import "./DailyLog.css";

const DailyLog = () => {
  const [formData, setFormData] = useState({});

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
    comentario,
  }) => {
    try {
      const { error } = await supabase.from().insert({
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
    if ((formData.name != null) & (formData.email != null)) {
      const user = await getUserByEmail("Users", formData.email);
      console.log(user);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="daily-log">
      <div>Registro de Emociones</div>
      <div className="log">
        <form onSubmit={handleSubmit}>
          <ul>
            {emociones.map((e) => (
              <li key={e.name}>
                <p>{e.name}</p>
                <select onChange={handleChange}>
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
            <li>
              <input type="text" placeholder="Otra" />
              <select onChange={handleChange}>
                <option value={formData.otra}>0</option>
                <option value={formData.otra}>1</option>
                <option value={formData.otra}>2</option>
                <option value={formData.otra}>3</option>
                <option value={formData.otra}>4</option>
                <option value={formData.otra}>5</option>
              </select>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default DailyLog;
