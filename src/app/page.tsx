"use client";
import Footer from "@/components/Footer/Footer";
import TradeInNavbar from "@/components/Navbar/Navbar";
import StockBar from "@/components/UI-asset/StockBar";
import Graph from "@/components/Stock Graph & Price/Graph";
import SideDashboard from "@/components/SideDashboard/SideDashboard";
import Price from "@/components/Stock Graph & Price/Price";
import { useEffect, useState } from "react";
import Trending_Marque from "@/components/Marquee-card/TrendingMarquee";
import { debounce } from "@/helpers/debounce";
import { useDispatch, useSelector } from "react-redux";
export default function Page() {
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
  return (
    <>
      <TradeInNavbar />

      <div className="flex flex-col sm:flex-row bg-black min-h-screen">
        {/* Left part of homepage (SideDashboard) */}
        <div className="shadow-lg border-r-2 border-slate-800 sm:block flex-shrink-0 w-64">
          <SideDashboard User={UserData} />
        </div>

        {/* Right part of homepage */}
        <div className="flex-1 max-w-[1400px]">
          <Trending_Marque data={coins} />

          {/* StockBar section */}
          <div className="sm:flex gap-2 justify-between items-center mb-4">
            <StockBar />
          </div>

          {/* Graph and Prices section */}
          <div className="sm:flex gap-2 xs:flex-col flex-wrap justify-between">
            {/* Graph */}
            <div className="sm:w-3/4">
              <Graph data={data} />
            </div>

            {/* Prices */}
            <div className="sm:w-1/4">
              <Price />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
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
const data = [
  { Date: "9/25/2023", Price: 26249.562897845204 },
  { Date: "9/26/2023", Price: 26298.634678281232 },
  { Date: "9/27/2023", Price: 26204.75759083597 },
  { Date: "9/28/2023", Price: 26350.146895428057 },
  { Date: "9/29/2023", Price: 27009.01375072488 },
  { Date: "9/30/2023", Price: 26917.199101637976 },
  { Date: "10/1/2023", Price: 26969.876144072576 },
  { Date: "10/2/2023", Price: 27967.510579087113 },
  { Date: "10/3/2023", Price: 27615.06488509527 },
  { Date: "10/4/2023", Price: 27439.121946705116 },
  { Date: "10/5/2023", Price: 27792.1112772493 },
  { Date: "10/6/2023", Price: 27435.874615135104 },
  { Date: "10/7/2023", Price: 27958.196437350485 },
  { Date: "10/8/2023", Price: 27977.543490700005 },
  { Date: "10/9/2023", Price: 27948.10365174851 },
  { Date: "10/10/2023", Price: 27593.782534439666 },
  { Date: "10/11/2023", Price: 27392.247702732497 },
  { Date: "10/12/2023", Price: 26842.190439092396 },
  { Date: "10/13/2023", Price: 26729.137205815106 },
  { Date: "10/14/2023", Price: 26841.136220644406 },
  { Date: "10/15/2023", Price: 26863.183569079916 },
  { Date: "10/16/2023", Price: 27150.29700140705 },
  { Date: "10/17/2023", Price: 28513.30993247735 },
  { Date: "10/18/2023", Price: 28417.72175169982 },
  { Date: "10/19/2023", Price: 28328.245198134824 },
  { Date: "10/20/2023", Price: 28715.748142407952 },
  { Date: "10/21/2023", Price: 29677.392888476206 },
  { Date: "10/22/2023", Price: 29920.07449265145 },
  { Date: "10/23/2023", Price: 30019.38050086351 },
  { Date: "10/24/2023", Price: 32953.262760830985 },
  { Date: "10/25/2023", Price: 33846.72425733224 },
  { Date: "10/26/2023", Price: 34471.986031672015 },
  { Date: "10/27/2023", Price: 34174.451552912586 },
  { Date: "10/28/2023", Price: 33899.09305644032 },
  { Date: "10/29/2023", Price: 34092.630932838576 },
  { Date: "10/30/2023", Price: 34556.242814761616 },
  { Date: "10/31/2023", Price: 34498.70391946407 },
  { Date: "11/1/2023", Price: 34672.2892841885 },
  { Date: "11/2/2023", Price: 35457.45491210553 },
  { Date: "11/3/2023", Price: 34924.05545044328 },
  { Date: "11/4/2023", Price: 34731.38136896784 },
  { Date: "11/5/2023", Price: 35048.407834901074 },
  { Date: "11/6/2023", Price: 35061.92874919579 },
  { Date: "11/7/2023", Price: 35031.26888208706 },
  { Date: "11/8/2023", Price: 35436.53762957962 },
  { Date: "11/9/2023", Price: 35795.080630710196 },
  { Date: "11/10/2023", Price: 36768.42081912672 },
  { Date: "11/11/2023", Price: 37344.249000720345 },
  { Date: "11/12/2023", Price: 37122.722824306555 },
  { Date: "11/13/2023", Price: 37067.69698212008 },
  { Date: "11/14/2023", Price: 36549.16204829837 },
  { Date: "11/15/2023", Price: 35545.201433454065 },
  { Date: "11/16/2023", Price: 37903.66245166294 },
  { Date: "11/17/2023", Price: 36201.51611146142 },
  { Date: "11/18/2023", Price: 36527.76022530742 },
  { Date: "11/19/2023", Price: 36582.36844192274 },
  { Date: "11/20/2023", Price: 37413.99460790531 },
  { Date: "11/21/2023", Price: 37489.298470802016 },
  { Date: "11/22/2023", Price: 35965.36036068078 },
  { Date: "11/23/2023", Price: 37464.83293220907 },
  { Date: "11/24/2023", Price: 37293.316127426726 },
  { Date: "11/25/2023", Price: 37738.93169747125 },
  { Date: "11/26/2023", Price: 37809.85286625321 },
  { Date: "11/27/2023", Price: 37491.838186008135 },
  { Date: "11/28/2023", Price: 37250.16905148115 },
  { Date: "11/29/2023", Price: 37802.23604377473 },
  { Date: "11/30/2023", Price: 37810.34641654128 },
  { Date: "12/1/2023", Price: 37711.81837585267 },
  { Date: "12/2/2023", Price: 38688.25874179069 },
  { Date: "12/3/2023", Price: 39481.666416062864 },
  { Date: "12/4/2023", Price: 39960.275420410515 },
  { Date: "12/5/2023", Price: 41974.331772543344 },
  { Date: "12/6/2023", Price: 44105.94477259938 },
  { Date: "12/7/2023", Price: 43788.28880825234 },
  { Date: "12/8/2023", Price: 43270.11955970747 },
  { Date: "12/9/2023", Price: 44202.17610943621 },
  { Date: "12/10/2023", Price: 43745.49199189547 },
  { Date: "12/11/2023", Price: 43757.959937619176 },
  { Date: "12/12/2023", Price: 41200.96272610168 },
  { Date: "12/13/2023", Price: 41450.819387377436 },
  { Date: "12/14/2023", Price: 42931.76182603245 },
  { Date: "12/15/2023", Price: 43009.5954563739 },
  { Date: "12/16/2023", Price: 41992.01418722399 },
  { Date: "12/17/2023", Price: 42247.06788172229 },
  { Date: "12/18/2023", Price: 41410.819634575855 },
  { Date: "12/19/2023", Price: 42684.182554683386 },
  { Date: "12/20/2023", Price: 42250.206182797505 },
  { Date: "12/21/2023", Price: 43634.1241684964 },
  { Date: "12/22/2023", Price: 43849.69959939619 },
  { Date: "12/23/2023", Price: 44003.6960216438 },
  { Date: "12/24/2023", Price: 43752.03088478376 },
  { Date: "12/25/2023", Price: 43034.971063091514 },
  { Date: "12/26/2023", Price: 43638.236302200916 },
  { Date: "12/27/2023", Price: 42516.426940282516 },
  { Date: "12/28/2023", Price: 43418.46777504291 },
  { Date: "12/29/2023", Price: 42600.65063315619 },
  { Date: "12/30/2023", Price: 42074.70715618848 },
  { Date: "12/31/2023", Price: 42220.61140121376 },
  { Date: "1/1/2024", Price: 42208.202176186474 },
  { Date: "1/2/2024", Price: 44168.68118687473 },
];
