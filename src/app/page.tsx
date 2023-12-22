"use client"
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import StockBar from "@/components/UI-asset/StockBar";
import Graph from "@/components/Stock Graph & Price/Graph";
import SideDashboard from "@/components/SideDashboard/SideDashboard";
import Price from "@/components/Stock Graph & Price/Price";
import { useEffect, useState } from "react";
import Trending_Marque from "@/components/Marquee-card/TrendingMarquee";

export default function Page() {
  const [ trending , setTrending ] = useState([])
  const coins = trending?.map((coin: any,i: number)=>{
      return ({
       id:coin.item.coin_id,
       image:coin.item.small,
       name:coin.item.name
     }); 
    }
     )
     console.log(coins)
  const data = [
    { Date: "10/16/2023", Price: 0.013135531834577802 },
    { Date: "10/17/2023", Price: 0.013135531834577802 },
    { Date: "10/18/2023", Price: 0.011913582049249584 },
    { Date: "10/19/2023", Price: 0.009739495713289043 },
    { Date: "10/20/2023", Price: 0.009706701116487802 },
    { Date: "10/21/2023", Price: 0.00568820932405429 },
    { Date: "10/22/2023", Price: 0.004975849255372646 },
    { Date: "10/23/2023", Price: 0.005175243187754998 },
    { Date: "10/24/2023", Price: 0.005097735311922618 },
    { Date: "10/25/2023", Price: 0.005201108519294425 },
    { Date: "10/26/2023", Price: 0.005309335560474713 },
    { Date: "10/27/2023", Price: 0.005182592895588143 },
    { Date: "10/28/2023", Price: 0.004865836907470763 },
    { Date: "10/29/2023", Price: 0.0048459540056011614 },
    { Date: "10/30/2023", Price: 0.00493515891937446 },
    { Date: "10/31/2023", Price: 0.00501763021661517 },
  ];
  console.log(trending)
  useEffect(()=>{
    const fetchData =  ()=>{
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
    }
    fetchData()
  },[])
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous"
      />
      <TradeInNavbar />
      <div className="flex flex-row bg-black min-h-screen">
        {/* this is the left part of homepage */}
        <div className="shadow-lg border-r-2 border-slate-800 hidden sm:block shrink">
          <SideDashboard />
        </div>

        {/* this is the right part of homepage */}
        <div className="flex-col flex-1 max-w-[1400px]">
          <Trending_Marque data={coins}/>
          <StockBar />
          {/* this part is for graph and the prices */}
          <div className="flex gap-2 xs:flex-col flex-wrap justify-between">
            {/* as the graph and the prices are in same line  */}
            <Graph data={data} />
            <Price />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
// export async function getServerSideProps() {

//   const res = await fetch('https://api.coingecko.com/api/v3/search/trending'); 
//   const data = await res.json();
//   console.log(data)
//   const trending_Coins = data
//   return {
//     props: {
//       data
//     }
//   }

// }