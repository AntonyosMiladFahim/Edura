import React, { createContext, useContext, useState, useMemo } from "react";
import assets from "../data/assets";

// 1️⃣ Create the context
const AppContext = createContext();

// 2️⃣ Create a provider component
export const AppProvider = ({ children }) => {
  const [grades, setGrades] = useState([
    { id: "1", name: "Primary 1", description: "Basic foundations" },
    { id: "2", name: "Primary 2", description: "Building knowledge" },
    { id: "3", name: "Preparatory 3", description: "Intermediate level" },
    { id: "4", name: "Secondary 1", description: "Advanced basics" },
  ]);

  // Reusable data access helpers that consume `assets`.
  const getItems = (type) => {
    if (!type) return null;
    return assets[type] || [];
  };

  const getById = (type, id) => {
    if (!type || !id) return null;
    const list = assets[type] || [];
    return list.find((item) => item.id === id || item.id === String(id));
  };

  // Memoize exported helpers to avoid unnecessary re-renders in consumers
  const helpers = useMemo(() => ({ getItems, getById, assets }), []);

  return (
    <AppContext.Provider value={{ grades, setGrades, ...helpers }}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom hook to use the context easily
export const useAppContext = () => useContext(AppContext);
