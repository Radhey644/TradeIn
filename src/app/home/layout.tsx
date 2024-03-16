"use client";
import Footer from "@/components/Footer/Footer";
import Trending_Marque from "@/components/Marquee-card/TrendingMarquee";
import TradeInNavbar from "@/components/Navbar/Navbar";
import SideDashboard from "@/components/SideDashboard/SideDashboard";
import Price from "@/components/Stock Graph & Price/Price";
import { debounce } from "@/helpers/debounce";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [trending, setTrending] = useState([]);
  const [UserData, setUserData] = useState();
  const coins = trending?.map((coin: any, i: number) => {
    return {
      id: coin.item.coin_id,
      image: coin.item.small,
      name: coin.item.name,
    };
  });
  console.log(coins);

  console.log(trending);
  const fetchTrendingData = () => {
    fetch(`https://api.coingecko.com/api/v3/search/trending`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        setTrending(responseData.coins);
      })
      .catch((err) => {
        console.log("Error occurred:", err);
      });
  };
  const fetchUser = () => {
    fetch("/api/users/me", {
      method: "GET",
    })
      .then(async (res) => {
        console.log(res);
        const result = await res.json();
        console.log(result.data);
        setUserData(result.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    debounce(fetchTrendingData(), 3000);
    debounce(fetchUser(), 3000);
  }, []);
  return (<>
 
   
      <TradeInNavbar />
 <div className="min-h-screen">
      <div className="flex flex-col sm:flex-row bg-black ">
        {/* Left part of homepage (SideDashboard) */}
        <div className="sticky top-0 border-r-2 border-slate-800 sm:block sm:flex-shrink-0 shadow-lg">
          <SideDashboard User={UserData} />
        </div>

        {/* Right part of homepage */}
        <div className="flex-1 max-w-[1400px]">
          <Trending_Marque data={coins} />

          {/* StockBar section */}
          {/* <div className="sm:flex gap-2 justify-between items-center mb-4">
            <StockBar />
          </div> */}

          {/* Graph and Prices section */}
          <div className="flex gap-2 xs:flex-col w-full flex-wrap justify-center items-center flex-1">
            {/* Graph */}
            <div className="w-3/4">{children}</div>

            {/* Prices */}
            <div className="w-1/4">
              <Price />
              <Price />
              <Price />
              <Price />
              <Price />
              <Price />
              <Price />
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer /> 
      </>
    
  );
}
