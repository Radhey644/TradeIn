"use client";
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import Graph from "@/components/Stock Graph & Price/Graph";
import {
  Divider,
  Select,
  SelectItem,
  Spacer,
  Spinner,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Symbol = () => {
  const { symbol } = useParams();
  console.log(symbol);
  const [coinData, setCoinData] = useState(null);
  const [Coin_graph_data, setCoin_graph_data] = useState([]);
  const [Graph_Interval, setGraph_Interval] = useState(120);
  const coinName = coinData?.name;
  const coinDescription = coinData?.description?.en;
  const coinImage = coinData?.image?.large;
  const coinPrice = coinData?.market_data?.current_price.usd;
  const Coin_price_change_24h = Number(coinData?.market_data?.price_change_24h);

  // Fetching market data for the specific crypto currency
  useEffect(() => {
    const fetchData = async () => {
      const market_data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${symbol}/market_chart?vs_currency=usd&days=${Graph_Interval}`
      );
      const market_res = await market_data.json();
      console.log(market_res.prices);
      const graphData = market_res.prices.map((price: [any, any]) => {
        const [timestamp, p] = price;
        const date = new Date(timestamp).toLocaleDateString("en-us");
        return {
          Date: date,
          Price: p,
        };
      });
      setCoin_graph_data(graphData);
    };
    fetchData();
  }, [Graph_Interval]);

  // Fetching the normal data for the symbol
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.coingecko.com/api/v3/coins/${symbol}?localization=false`
      );
      const data = await result.json();
      setCoinData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <TradeInNavbar />
      <div className="min-h-screen flex justify-center p-4 ">
        {coinData ? (
          <div className="p-4 shadow-inner shadow-default-50 rounded-md h-fit mt-[1.5rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-block rounded-full w-[5rem] p-1">
                  <img src={coinImage} alt="" />
                </span>
                <div>
                  <span className="font-bold text-3xl inline-block">
                    {coinName}
                  </span>
                  <span className="block opacity-50 text-lg">{symbol}</span>
                </div>
              </div>

              <Select
                labelPlacement={"outside-left"}
                label="Time Interval"
                className="max-w-xs font-bold text-md"
                value={Graph_Interval}
                onChange={(e) => {
                  setGraph_Interval(Number(e.target.value));
                }}
              >
                <SelectItem key={1} value={1}>
                  1 day
                </SelectItem>
                <SelectItem key={5} value={5}>
                  5 days
                </SelectItem>
                <SelectItem key={15} value={15}>
                  15 days
                </SelectItem>
                <SelectItem key={30} value={30}>
                  30 days
                </SelectItem>
                <SelectItem key={60} value={60}>
                  60 days
                </SelectItem>
                <SelectItem key={90} value={90}>
                  90 days
                </SelectItem>
                <SelectItem key={120} value={120}>
                  120 days
                </SelectItem>
              </Select>

              <div className="">
                <span className="font-bold block text-2xl">${coinPrice}</span>
                {Coin_price_change_24h > 0 ? (
                  <span className="bg-green-600 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      width="14"
                      viewBox="0 0 384 512"
                      className="inline"
                    >
                      <path
                        fill="#ffffff"
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                      />
                    </svg>
                    {Coin_price_change_24h.toFixed(4)}
                  </span>
                ) : (
                  <span className="bg-red-600 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      width="14"
                      viewBox="0 0 384 512"
                      className="inline"
                    >
                      <path
                        fill="#ffffff"
                        d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                      />
                    </svg>
                    {Coin_price_change_24h.toFixed(4)}
                  </span>
                )}
              </div>
            </div>
            <Divider />
            <div className="mt-3 flex px-2 gap-3 items-center">
              <div className="flex-shrink">
                <Graph data={Coin_graph_data} />
              </div>
              <div className="font-semibold text-xl flex-1  overflow-hidden h-[450px]">
                {coinDescription}...
              </div>
            </div>

            {/* <h1>{coinPrice}</h1> */}
          </div>
        ) : (
          <Spinner size="lg" />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Symbol;
