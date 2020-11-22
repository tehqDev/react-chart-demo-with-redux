import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getCurrentStock, getTotalDays } from "../redux/selectors";

import { LineChart } from "react-chartkick";
import "chart.js";

const StyledStockGraph = styled.div`
  border-style: solid;
  padding: 10px;
  width: 80%;
  height: 40%;
  border-width: 2px;
  display: flex;
  align-content: center;
  align-items: stretch;
  flex-direction: column;
`;

const StockGraph = ({ ticker, currentStock, totalDays }) => {
  const chartData = currentStock.shareHistory.map((stock) => {
    return [stock.totalDays, stock.costPerShare];
  });

  const chartMax = totalDays + 15;
  const chartMin = Math.floor(chartMax - 30, 0); // todo: settings

  return (
    <StyledStockGraph>
      <div>
        <LineChart
          xmin={chartMin}
          xmax={chartMax}
          prefix="$"
          legend={true}
          colors={["#40ed60", "#40ed60"]}
          xtitle="Total Days"
          ytitle="$ Per Share"
          label={ticker && ticker}
          data={chartData}
        />
      </div>
    </StyledStockGraph>
  );
};

const mapStateToProps = (store) => {
  const totalDays = getTotalDays(store);
  const currentStock = getCurrentStock(store);
  return {
    ticker: currentStock?.ticker,
    currentStock: currentStock,
    totalDays: totalDays
  };
};

export default connect(mapStateToProps)(StockGraph);
