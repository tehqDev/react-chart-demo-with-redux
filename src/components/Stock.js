import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { selectStock } from "../redux/actions";

const StyledStock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  background: ${({ isSelected }) => (isSelected ? "lightblue" : "white")};
`;

const Stock = ({ stock, selectStock }) => {
  return (
    <StyledStock
      isSelected={stock.isSelected}
      onClick={() => selectStock(stock.id)}
    >
      <div>{stock.ticker}</div>
      <div>${stock.costPerShare}</div>
      <div>Total Shares: {stock.totalShares}</div>
      {/* <div>
        {stock.shareHistory
          .sort((x) => -x.day)
          .map((stockInfo, index) => {
            return (
              <div key={index}>
                Price: ${stockInfo.costPerShare}
                Day: {stockInfo.day}
              </div>
            );
          })}
      </div> */}
    </StyledStock>
  );
};

export default connect(null, { selectStock })(Stock);
