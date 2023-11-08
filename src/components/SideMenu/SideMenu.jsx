import "./sidemenu.css";
import { BiSolidDashboard } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import React, { useState } from "react";
// import { Link } from "react-router-dom";

function SideMenu() {
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="sidemenu">
      <div className="menu_list">
        <div
          className={activeMenuItem === "Dashboard" ? "_active" : ""}
          onClick={() => handleMenuItemClick("Dashboard")}
        >
          <BiSolidDashboard />
          Dashboard
        </div>
        <div
          className={activeMenuItem === "Account" ? "_active" : ""}
          onClick={() => handleMenuItemClick("Account")}
        >
          <MdAccountBalanceWallet />
          Accounts
        </div>
        <div
          className={activeMenuItem === "Payroll" ? "_active" : ""}
          onClick={() => handleMenuItemClick("Payroll")}
        >
          <PiCurrencyDollarSimpleBold />
          Payroll
        </div>
        <div
          className={activeMenuItem === "Reports" ? "_active" : ""}
          onClick={() => handleMenuItemClick("Reports")}
        >
          <BiSolidReport />
          Reports
        </div>
        <div
          className={activeMenuItem === "Advisor" ? "_active" : ""}
          onClick={() => handleMenuItemClick("Advi")}
        >
          <BiSolidUser />
          Advisor
        </div>
        <div
          className={activeMenuItem === "Contact" ? "_active" : ""}
          onClick={() => handleMenuItemClick("Contact")}
        >
          <MdContacts />
          Contact
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
