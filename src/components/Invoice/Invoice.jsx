import "./invoice.css";
import Bar from "./Bar";

function Invoice({ secoundData }) {
  return (
    <div className="invoice">
      <div className="invoice_nav">
        <h4>
          <b>Invoices owned to you</b>
        </h4>

        <button>
          <b>New Sales Invoice</b>
        </button>
      </div>
      <div className="invoice_graph">
        <Bar secoundData={secoundData} />
      </div>
    </div>
  );
}

export default Invoice;
