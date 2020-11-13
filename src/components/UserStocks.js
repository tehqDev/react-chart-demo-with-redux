import React from "react";
import styled from "styled-components";
import Stock from "./Stock";

import { connect } from "react-redux";
import { getUserStocks } from "../redux/selectors";

const StyledUserStocks = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  min-height: 200px;
  margin: 10px 0px 0px 0px;
  width: 80%;
  border-style: solid;
  overflow: auto;
  padding: 10px;
  align-items: center;
`;

const UserStocks = ({ stocks }) => {
  return (
    <StyledUserStocks>
      {stocks.map((stock, index) => {
        return <Stock key={index} stock={stock} />;
      })}
      ..userStocks
    </StyledUserStocks>
  );
};

const mapStateToProps = (state) => {
  const userStocks = getUserStocks(state);
  return { stocks: userStocks };
};

export default connect(mapStateToProps)(UserStocks);
