import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const exampleStock: Stock = {
  symbol: "AAPL",
  company: "Apple Inc.",
  quantity: 2,
  price: 150.25,
};
const initialState = {
  user: null,
  balance: 100000, // Initial balance in dollars
  stocks: <Stock[]>[exampleStock], // List of stocks the user owns
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    buyStock: (state, action) => {
      console.log(action);
      const { symbol, quantity, company, price } = action.payload;
      console.log(symbol);
      const totalCost = quantity * price;

      if (state.balance >= totalCost) {
        // Deduct the total cost from the balance
        state.balance -= totalCost;

        // Check if the user already owns the stock
        const existingStock = state.stocks.find(
          (stock) => stock.symbol === symbol
        );

        if (existingStock) {
          // Update the existing stock's quantity and average price
          existingStock.quantity += quantity;
        } else {
          // Add a new stock to the portfolio
          state.stocks.push({
            symbol: symbol,
            company: company,
            quantity,
            price: price,
          });
        }
      } else {
        toast.error("Insufficient funds to buy the stock", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 500,
        });
        console.log("Insufficient funds to buy the stock");
      }
    },
    sellStock: (state, action) => {
      console.log(action);
      const { symbol, quantity, company, price } = action.payload;
      const sellingValue = quantity * price;

      // Find the stock in the portfolio
      const stockIndex = state.stocks.findIndex(
        (stock) => stock.symbol === symbol
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
  price: number; // Average price per stock
};
