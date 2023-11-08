import { createContext, useState } from "react";
import { dataByMonth2 } from "../datas/firstchartData";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");

  const fetchMonth = async (input) => {
    setSelectedMonth(input);
  };
  const x = 5;
  return (
    <DataContext.Provider
      value={{ x, dataByMonth2, selectedMonth, fetchMonth }}
    >
      {children}
    </DataContext.Provider>
  );
};
