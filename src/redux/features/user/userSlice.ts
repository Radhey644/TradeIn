import { createSlice } from "@reduxjs/toolkit";
const exampleStock: Stock = {
  symbol: "AAPL",
  company: "Apple Inc.",
  quantity: 2,
  averagePrice: 150.25,
};
const initialState = {
  user: null,
  balance: 10000, // Initial balance in dollars
  stocks: <Stock[]>[exampleStock], // List of stocks the user owns
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    buyStock: (state, action) => {
      const { stockSymbol, quantity, companyName, price } = action.payload;
      const totalCost = quantity * price;

      if (state.balance >= totalCost) {
        // Deduct the total cost from the balance
        state.balance -= totalCost;

        // Check if the user already owns the stock
        const existingStock = state.stocks.find(
          (stock) => stock.symbol === stockSymbol
        );

        if (existingStock) {
          // Update the existing stock's quantity and average price
          existingStock.quantity += quantity;
          existingStock.averagePrice =
            (existingStock.averagePrice * existingStock.quantity + totalCost) /
            existingStock.quantity;
        } else {
          // Add a new stock to the portfolio
          state.stocks.push({
            symbol: stockSymbol,
            company: companyName,
            quantity,
            averagePrice: price,
          });
        }
      } else {
        console.log("Insufficient funds to buy the stock");
      }
    },
    sellStock: (state, action) => {
      const { stockSymbol, quantity, price } = action.payload;
      const sellingValue = quantity * price;

      // Find the stock in the portfolio
      const stockIndex = state.stocks.findIndex(
        (stock) => stock.symbol === stockSymbol
      );

      if (stockIndex !== -1 && state.stocks[stockIndex].quantity >= quantity) {
        // Deduct the sold quantity from the stock in the portfolio
        state.stocks[stockIndex].quantity -= quantity;

        // Add the selling value to the balance
        state.balance += sellingValue;

        // Remove the stock from the portfolio if the quantity becomes zero
        if (state.stocks[stockIndex].quantity === 0) {
          state.stocks.splice(stockIndex, 1);
        }
      } else {
        console.log("Insufficient stocks to sell");
      }
    },
  },
});
export const { buyStock, sellStock } = portfolioSlice.actions;
export default portfolioSlice.reducer;
export type Stock = {
  symbol: string; // Stock symbol (e.g., AAPL, GOOGL)
  company: string; // Name of the company
  quantity: number; // Number of stocks owned
  averagePrice: number; // Average price per stock
};
