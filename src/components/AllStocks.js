import React from "react";
import styled from "styled-components";
import Stock from "./Stock";

import { connect } from "react-redux";
import { getAllStocks } from "../redux/selectors";

const StyledAllStocks = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  min-height: 200px;
  height: 100%;
  margin: 10px 0px 0px 0px;
  width: 80%;
  border-style: solid;
  overflow: auto;
  padding: 10px;
  align-items: center;
`;

const AllStocks = ({ stocks }) => {
  return (
    <StyledAllStocks>
      {stocks.map((stock, index) => {
        return <Stock key={index} stock={stock} />;
      })}
    </StyledAllStocks>
  );
};

const mapStateToProps = (store) => {
  const allStocks = getAllStocks(store);
  return { stocks: allStocks };
};

export default connect(mapStateToProps)(AllStocks);
