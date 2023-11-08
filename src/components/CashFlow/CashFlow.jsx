import "./cashflow.css";
import ProgBar from "./ProgBar";

function CashFlow({ thirdData }) {
  return (
    <div className="cashflow">
      <div className="cashflow_nav">
        <h4>
          <b>Total cash flow</b>
        </h4>
        <div>
          <div className="in">
            <div className="in_square"></div>In
          </div>
          <div className="out">
            <div className="out_square"></div>Out
          </div>
        </div>
      </div>
      <div className="cashflow_graph">
        <ProgBar thirdData={thirdData} />
      </div>
    </div>
  );
}

export default CashFlow;
