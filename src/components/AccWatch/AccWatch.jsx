import "./accwatch.css";

function AccWatch({ fourdData }) {
  return (
    <div className="accwatch">
      <div className="accwatch_nav">
        <h4>
          <b>Account watchlist</b>
        </h4>
      </div>
      <div className="accwatch_graph">
        <div className="account">
          <div className="account_title">Account</div>
          <div className="account_data">
            <p>{fourdData.sales.title}</p>
            <p>{fourdData.Advertising.title}</p>
            <p>{fourdData.Inventory.title}</p>
            <p>{fourdData.Entertainment.title}</p>
            <p>{fourdData.Product.title}</p>
          </div>
        </div>
        <div className="thisMonth">
          <div className="thisMonth_title">This Month</div>
          <div className="thisMonth_data">
            <p>{fourdData.sales.thisMonth}</p>
            <p>{fourdData.Advertising.thisMonth}</p>
            <p>{fourdData.Inventory.thisMonth}</p>
            <p>{fourdData.Entertainment.thisMonth}</p>
            <p>{fourdData.Product.thisMonth}</p>
          </div>
        </div>
        <div className="YTD">
          <div className="YTD_title">YTD</div>
          <div className="YTD_data">
            <p>{fourdData.sales.ytd}</p>
            <p>{fourdData.Advertising.ytd}</p>
            <p>{fourdData.Inventory.ytd}</p>
            <p>{fourdData.Entertainment.ytd}</p>
            <p>{fourdData.Product.ytd}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccWatch;
