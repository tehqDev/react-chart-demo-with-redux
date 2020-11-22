import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { selectUserStock } from "../redux/actions";

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

const UserPurchase = ({ stock }) => {
  return (
    <StyledStock
      isSelected={stock.isSelected}
      onClick={() => {
        selectUserStock(stock.ticker);
      }}
    >
      <div>{stock.ticker}</div>
      <div>Total Value: ${stock.TotalValue}</div>
      <div>Purchased Shares: {stock.totalShares.toFixed(2)}</div>
      <button>Sell</button>
    </StyledStock>
  );
};

export default connect(null, { selectUserStock })(UserPurchase);
