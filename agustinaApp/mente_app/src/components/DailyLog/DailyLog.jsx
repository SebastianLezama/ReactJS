import React, { useEffect, useState } from "react";
import { getUserByEmail, supabase } from "../SupabaseClient";
import "./DailyLog.css";
import { useAuth } from "../../Context/AuthContext";
import DailyLogForm from "./DailyLogForm";
import { useLogData } from "../../Context/LogContext";
// import { moment } from "moment";

const DailyLog = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [logData, setLogData] = useState([]);
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
  const data = useLogData();

  // function to display log in dailyLogForm

  const displayLog = () => {};

  // use effect fetch of log

  useEffect(() => {
    // data?.getLog(auth.userSession?.user?.email);
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
  const [selectedRadio, setSelectedRadio] = useState("0");

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
      data.getLog(auth?.userSession?.user?.email);
      // setFormData(form);
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
  const handleDateChange = (e) => {
    const eventDate = new Date(e).getDate() + "/" + new Date(e).getMonth();
    console.log(eventDate);

    const filteredDate = data?.logData?.find(
      (log) =>
        new Date(log?.date).getDate() + "/" + new Date(log?.date).getMonth() ===
        eventDate
    );
    console.log("date change", filteredDate);
    if (
      data?.logData?.some(
        (log) =>
          new Date(log?.date).getDate() +
            "/" +
            new Date(log?.date).getMonth() ===
          eventDate
      )
    ) {
      setFormData(filteredDate);
    } else {
      setFormData(form);
      setStartDate(e);
    }
  };

  const handleRadio = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setSelectedRadio(e.target.value);
  };
  const isRadioSelected = (value) => {
    selectedRadio === value;
  };

  // useEffect(() => {
  //   setFormData();

  //   return () => {};
  // }, [startDate]);

  return (
    <DailyLogForm
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      handleRadio={handleRadio}
      isRadioSelected={isRadioSelected}
      formData={formData}
      setFormData={setFormData}
      startDate={startDate}
      logData={data?.logData}
    />
  );
};

export default DailyLog;
