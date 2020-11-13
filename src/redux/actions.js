import {
  SET_STOCKS,
  SELECT_STOCK,
  USER_WORK,
  UPDATE_STOCKS,
  NEXT_DAY,
  SET_SELECTED_TAB
} from "./actionTypes";

export const setStocks = (stocks) => ({
  type: SET_STOCKS,
  payload: { stocks }
});

export const selectStock = (stockId) => ({
  type: SELECT_STOCK,
  payload: { stockId }
});

export const userWork = () => ({
  type: USER_WORK,
  payload: {}
});

export const updateStocks = (totalDays) => ({
  type: UPDATE_STOCKS,
  payload: { totalDays }
});

export const nextDay = () => ({
  type: NEXT_DAY,
  payload: {}
});

export const setSelectedTab = (targetTab) => ({
  type: SET_SELECTED_TAB,
  payload: { targetTab }
});
