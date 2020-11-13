import {
  NEXT_DAY,
  SELECT_STOCK,
  SET_SELECTED_TAB,
  SET_STOCKS,
  UPDATE_STOCKS,
  USER_WORK
} from "../actionTypes";

// settings:

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberOfStocks = 12;
const userPayAmount = 50;
const startingCash = 0;

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const week = [
  { Day: "MON", CurrentDay: true },
  { Day: "TUE", CurrentDay: false },
  { Day: "WED", CurrentDay: false },
  { Day: "THU", CurrentDay: false },
  { Day: "FRI", CurrentDay: false },
  { Day: "SAT", CurrentDay: false },
  { Day: "SUN", CurrentDay: false }
];

// #imported:

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

// #

const generateStockName = () => {
  return (
    alphabet[randomIntFromInterval(0, 25)] +
    alphabet[randomIntFromInterval(0, 25)].toLowerCase() +
    alphabet[randomIntFromInterval(0, 25)]
  );
};

const generateStockTicker = () => {
  return (
    alphabet[randomIntFromInterval(0, 25)] +
    alphabet[randomIntFromInterval(0, 25)] +
    alphabet[randomIntFromInterval(0, 25)]
  );
};

const generateShares = () => {
  // todo: settings
  return randomIntFromInterval(5000, 1000000000);
};

const generateSharePrice = () => {
  // todo: settings
  return generateRandomNumber(1, 600).toFixed(2);
};

const generateStocks = (numberOfStocks) => {
  let stocks = [];
  for (var stock = 0; stock < numberOfStocks; stock++) {
    stocks.push({
      id: stock,
      name: generateStockName(),
      ticker: generateStockTicker(),
      isSelected: false,
      totalShares: generateShares(),
      costPerShare: generateSharePrice(),
      totalDays: 0,
      marketCap: 0,
      shareHistory: []
    });
  }
  stocks.map((stock) => {
    return {
      ...stock,
      marketCap: (stock.totalShares * stock.costPerShare).toFixed(2),
      totalDays: 0
    };
  });
  stocks[0].isSelected = true;
  return stocks;
};

const initialStocks = generateStocks(numberOfStocks);

const initialState = {
  stock_data: initialStocks,
  currentStock: initialStocks && initialStocks[0],
  user_stock_data: [],
  user: {
    cash: startingCash
  },
  week: week,
  totalDays: 0, // tood: settings
  selectedTab: "AllStocks"
};

export default function (state = initialState, action) {
  //console.log(action.type);
  switch (action.type) {
    case SET_STOCKS: {
      const { stocks } = action.payload;
      return {
        ...state,
        stock_data: stocks
      };
    }
    case USER_WORK: {
      return {
        ...state,
        user: {
          cash: state.user.cash + userPayAmount
        }
      };
    }
    case SELECT_STOCK: {
      const { stockId } = action.payload;
      return {
        ...state,
        currentStock: state.stock_data.find((x) => x.id === stockId),
        stock_data: state.stock_data.map((stock) => {
          return stock.id === stockId
            ? { ...stock, isSelected: true }
            : { ...stock, isSelected: false };
        })
      };
    }
    case UPDATE_STOCKS: {
      const { totalDays } = action.payload;

      return {
        ...state,
        stock_data: state.stock_data.map((stock) => {
          stock.shareHistory.push({
            costPerShare: stock.costPerShare,
            totalDays: totalDays
          });
          const newStock = {
            ...stock,
            costPerShare: (
              stock.costPerShare *
              (1 + generateRandomNumber(-0.06, 0.06))
            ) // todo: settings
              .toFixed(2)
          };
          return newStock;
        })
      };
    }
    case NEXT_DAY: {
      state.totalDays = state.totalDays + 1;
      return {
        ...state,
        week: state.week.map((day) => {
          const dayOfWeek = daysOfWeek[state.totalDays % 7];
          if (day.Day === dayOfWeek) {
            return {
              ...day,
              CurrentDay: true
            };
          } else {
            return {
              ...day,
              CurrentDay: false
            };
          }
        })
      };
    }
    case SET_SELECTED_TAB: {
      const { targetTab } = action.payload;

      return {
        ...state,
        selectedTab: targetTab
      };
    }
    default:
      return state;
  }
}
