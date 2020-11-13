import React from "react";
import styled from "styled-components";
import StockGraph from "./StockGraph";
import UserStats from "./UserStats";
import Calendar from "./Calendar";
import StockNav from "./StockNav";

import { Tabs } from "../redux/constants";

import { connect } from "react-redux";
import { updateStocks, userWork, nextDay, selectStock } from "../redux/actions";
import {
  getWeek,
  getTotalDays,
  getSelectedTab,
  getCurrentStock
} from "../redux/selectors";

const StyledApp = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const StyledWorkButton = styled.button`
  margin: 10px;
`;

const App = ({
  week,
  nextDay,
  totalDays,
  userWork,
  updateStocks,
  selectedTab,
  currentStock,
  selectStock
}) => {
  const stockProfitPercent = 10.0;
  return (
    <StyledApp>
      <StockGraph />
      <StyledWorkButton
        onClick={() => {
          userWork();
          updateStocks(Number(totalDays) + 1);
          nextDay();
          selectStock(currentStock.id);
        }}
      >
        Work
      </StyledWorkButton>
      <Calendar week={week} totalDays={totalDays} />
      <UserStats stockProfitPercent={stockProfitPercent} />

      <StockNav />
      {Tabs[selectedTab]}
    </StyledApp>
  );
};

const mapStateToProps = (store) => {
  const week = getWeek(store);
  const totalDays = getTotalDays(store);
  const selectedTab = getSelectedTab(store);
  const currentStock = getCurrentStock(store);
  return {
    week: week,
    totalDays: totalDays,
    selectedTab: selectedTab,
    currentStock: currentStock
  };
};

export default connect(mapStateToProps, {
  userWork,
  updateStocks,
  nextDay,
  selectStock
})(App);
