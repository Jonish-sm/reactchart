import "./invoice.css";
import Bar from "./Bar";

function Invoice({ secoundData }) {
  return (
    <div className="invoice">
      <div className="invoice_nav">
        <h4>
          <b>Invoices owned to you</b>
        </h4>

        <label for="fileInput" class="fileInputLabel">
          <span>New Sales Invoices</span>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </label>
      </div>
      <div className="invoice_graph">
        <Bar secoundData={secoundData} />
      </div>
    </div>
  );
}

export default Invoice;
