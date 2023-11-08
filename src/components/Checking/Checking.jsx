import "./checking.css";
import React, { useState, useContext } from "react";
import Curved from "./Curved";
import { DataContext } from "../../context/dataFlow";

function Checking() {
  const [dateRange, setDateRange] = useState(10);

  const { dataByMonth2, fetchMonth, selectedMonth } = useContext(DataContext);

  const handleSelectChange = async (e) => {
    await fetchMonth(e.target.value);
  };
  const handleDateRange = (e) => setDateRange(e.target.value);

  const datas = dataByMonth2[selectedMonth];
  const data1 = datas.slice(0, dateRange);
  const [monthdays, monthdatas] = data1.reduce(
    (acc, dayData) => {
      const key = Number(Object.keys(dayData)[0]);
      acc[0].push(key);
      acc[1].push(dayData[key]);
      return acc;
    },
    [[], []]
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octuber",
    "November",
    "December",
  ];

  return (
    <div className="checking">
      <div className="checking_nav">
        <div className="checking_text">
          <h4>
            <b>Checking account</b>
          </h4>
        </div>
        <div className="checking_control">
          <div className="managed">
            <select value={dateRange} onChange={handleDateRange}>
              {[10, 20, 30].map((value) => (
                <option key={value} value={value}>
                  0 - {value}
                </option>
              ))}
            </select>
          </div>
          <select value={selectedMonth} onChange={handleSelectChange}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="checking_graph">
        <Curved data={monthdatas} dates={monthdays} />
      </div>
    </div>
  );
}

export default Checking;
