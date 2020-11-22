export const getStocksState = (store) => store.stocks;

export const getAllStocks = (store) =>
  getStocksState(store) ? getStocksState(store).stock_data : [];

export const getCurrentStock = (store) =>
  getStocksState(store) ? getStocksState(store).currentStock : {};

export const getCurrentUserStock = (store) =>
  getStocksState(store) ? getStocksState(store).currentUserStock : {};

export const getUserCash = (store) =>
  getStocksState(store) ? getStocksState(store).user.cash : {};

export const getWeek = (store) =>
  getStocksState(store) ? getStocksState(store).week : {};

export const getTotalDays = (store) =>
  getStocksState(store) ? getStocksState(store).totalDays : { totalDays: 0 };

export const getSelectedTab = (store) =>
  getStocksState(store)
    ? getStocksState(store).selectedTab
    : { selectedTab: "AllStocks" };

export const getUserStocks = (store) =>
  getStocksState(store) ? getStocksState(store).user_stock_data : [];

