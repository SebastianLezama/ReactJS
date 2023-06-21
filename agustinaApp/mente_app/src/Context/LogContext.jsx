import { createContext, useContext, useEffect, useState } from "react";

export const getLocalStorage = (name) => {
  const localData = localStorage.getItem(name);
  return localData ? JSON.parse(localData) : [];
};
