import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { selectStock, buyStock, selectUserStock, updateUserStocks } from "../redux/actions";

const StyledStock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  background: ${({ isSelected }) => (isSelected ? "lightblue" : "white")};
`;

const Stock = ({ stock, selectStock, buyStock, updateUserStocks }) => {
  return (
    <StyledStock
      isSelected={stock.isSelected}
      onClick={() => selectStock(stock.id)}
    >
      <div>{stock.ticker}</div>
      <div>${stock.costPerShare}</div>
      <div>Total Shares: {stock.totalShares.toLocaleString()}</div>
      <button
        onClick={() => {
          buyStock(stock);
          updateUserStocks();
        }}
      >
        Buy
      </button>
    </StyledStock>
  );
};

export default connect(null, { selectStock, buyStock, selectUserStock, updateUserStocks })(Stock);
