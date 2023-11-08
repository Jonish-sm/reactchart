import React, { useState, useContext } from "react";
import AccWatch from "../../components/AccWatch/AccWatch";
import CashFlow from "../../components/CashFlow/CashFlow";
import Checking from "../../components/Checking/Checking";
import Invoice from "../../components/Invoice/Invoice";
import "./dashboard.css";
import { secoundData } from "../../datas/secoundchartData";
import { thirdData } from "../../datas/thirdData";
import { fourdData } from "../../datas/fourdData";
import { dataByMonth } from "../../datas/firstchartData";
import { DataContext } from "../../context/dataFlow";

function Dashboard() {
  const [randomNumber, setRandomNumber] = useState(0);
  const { fetchMonth } = useContext(DataContext);
  const months = ["January", "February", "March", "April"];

  const buttonClick = async () => {
    const random = Math.floor(Math.random() * 4);
    setRandomNumber(random);
    await fetchMonth(months[random]);
  };

  const secoundDatas = secoundData[randomNumber];
  const thirdDatas = thirdData[randomNumber];
  const fourdDatas = fourdData[randomNumber][0];

  return (
    <>
      <div className="btn">
        <button onClick={buttonClick}>Generate</button>
      </div>
      <div className="dashboard">
        <Checking dataByMonth={dataByMonth} />
        <Invoice secoundData={secoundDatas} />
        <CashFlow thirdData={thirdDatas} />
        <AccWatch fourdData={fourdDatas} />
      </div>
    </>
  );
}

export default Dashboard;
