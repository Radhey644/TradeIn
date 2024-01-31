"use client";
import { DownArrow } from "@/components/CoinPage/DownArrow";
import { UpArrow } from "@/components/CoinPage/UpArrow";
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import Graph from "@/components/Stock Graph & Price/Graph";
import {
  Stock,
  buyStock,
  sellStock,
} from "@/redux/features/user/portfolioSlice";
import {
  Button,
  Divider,
  Select,
  SelectItem,
  Spacer,
  Spinner,
} from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const [coinData, setCoinData] = useState(null);
  const [stock, setStock] = useState<Stock>();
  const [Coin_graph_data, setCoin_graph_data] = useState([]);
  const [Graph_Interval, setGraph_Interval] = useState(120);
  const coinName = coinData?.name;
  const coinDescription = coinData?.description.en;
  const coinImage = coinData?.image?.large;
  const coinPrice = coinData?.market_data?.current_price.usd;
  const Coin_price_change_24h = Number(coinData?.market_data?.price_change_24h);

  // Fetching market data for the specific crypto currency

  useEffect(() => {
    const fetchData = async () => {
      const market_data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${Graph_Interval}`
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
      console.log(graphData);
      setCoin_graph_data(graphData);
    };
    fetchData();
  }, [Graph_Interval]);

  // Fetching the normal data for the symbol
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
      );
      const data = await result.json();
      const { name, symbol } = data;
      const temp: Stock = {
        company: name,
        quantity: 1,
        symbol: symbol.toUpperCase(),
        price: data.market_data?.current_price.usd,
      };
      setStock(temp);
      setCoinData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-center">
      {coinData ? (
        <div className="p-4 shadow-inner shadow-default-50 rounded-md h-fit mt-[1.5rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center self-start">
              <span className="inline-block rounded-full w-[5rem] p-1">
                <img src={coinImage} alt="" />
              </span>
              <div>
                <span className="font-bold text-3xl inline-block">
                  {coinName}
                </span>
                <span className="block opacity-50 text-lg">{id}</span>
              </div>
            </div>
            <div>
              <Select
                labelPlacement={"outside-left"}
                label="Time Interval"
                defaultSelectedKeys={["120"]}
                className=" w-fit max-w-xs font-bold text-md"
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
            </div>
            <div className="flex gap-2 ">
              <Button
                color="success"
                onClick={() => {
                  dispatch(buyStock(stock));
                }}
              >
                Buy
              </Button>
              <Button
                color="danger"
                onClick={() => {
                  dispatch(sellStock(stock));
                }}
              >
                Sell
              </Button>
            </div>

            <div className="">
              <span className="font-bold block text-2xl">${coinPrice}</span>
              {Coin_price_change_24h > 0 ? (
                <span className="bg-green-600 p-1 rounded-full inline-block">
                  <UpArrow />
                  {Coin_price_change_24h.toFixed(4)}
                </span>
              ) : (
                <span className="bg-red-600 p-1 rounded-full inline-block">
                  <DownArrow />
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
            <div className="font-semibold text-lg opacity-55 flex-1  overflow-hidden h-[450px]">
              {coinDescription}...
            </div>
          </div>

          {/* <h1>{coinPrice}</h1> */}
        </div>
      ) : (
        <Spinner size="lg" />
      )}
    </div>
  );
};

export default Page;
