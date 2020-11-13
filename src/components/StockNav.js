import React from "react";
import { connect } from "react-redux";
import { setSelectedTab } from "../redux/actions";
import styled from "styled-components";

const StyledStockNav = styled.div`
  display: flex;
  margin: 10px;
  border: solid;
  padding: 10px;
`;

const StyledTab = styled.div`
  margin: 10px;
`;

const StockNav = ({ setSelectedTab }) => {
  return (
    <StyledStockNav>
      <StyledTab onClick={() => setSelectedTab("AllStocks")}>
        All Stocks
      </StyledTab>
      <StyledTab onClick={() => setSelectedTab("UserStocks")}>
        User Stocks
      </StyledTab>
      <StyledTab onClick={() => setSelectedTab("Upgrades")}>Upgrades</StyledTab>
    </StyledStockNav>
  );
};

export default connect(null, { setSelectedTab })(StockNav);
