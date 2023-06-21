import React, { useEffect, useState } from "react";
import { getUserByEmail, supabase } from "../SupabaseClient";
import "./DailyLog.css";
import { useAuth } from "../../Context/AuthContext";
import DailyLogForm from "./DailyLogForm";

const DailyLog = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [logData, setLogData] = useState([]);
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

  // function to display log in dailyLogForm

  const displayLog = () => {};

  // use effect fetch of log
  const getLog = async () => {
    setLogData(await getUserByEmail("Log", auth.user?.email));
    logData && console.log("DailyLog useEffect", new Date(logData[0]?.date));
    localStorage.setItem("userLog", JSON.stringify(logData));
  };

  useEffect(() => {
    getLog();
    // return () => {};
  }, []);

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
      date: startDate,
      // date: startDate.toDateString(),
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
  };

  return (
    <DailyLogForm
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      formData={formData}
      startDate={startDate}
      logData={logData}
    />
  );
};

export default DailyLog;
