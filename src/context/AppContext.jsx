import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const AppContext = createContext();

// 2️⃣ Create a provider component
export const AppProvider = ({ children }) => {
  const [grades, setGrades] = useState([
    { id: "1", name: "Grade 1", description: "Basic foundations" },
    { id: "2", name: "Grade 2", description: "Building knowledge" },
    { id: "3", name: "Grade 3", description: "Intermediate level" },
    { id: "4", name: "Grade 4", description: "Advanced basics" },
  ]);

  return (
    <AppContext.Provider value={{ grades, setGrades }}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom hook to use the context easily
export const useAppContext = () => useContext(AppContext);
