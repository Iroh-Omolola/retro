import {
  AppointmentTable,
  DashboardLayout,
  MiniCard,
  RadarChart,
} from "./components";
import ShirtOne from "./components/assets/shirt1.png";
import ShirtTwo from "./components/assets/shirt2.png";
import ShirtThree from "./components/assets/shirt3.png";
import ShirtFour from "./components/assets/shirt4.png";
import GreenRainbow from "./components/assets/green_rainbow.png";
import BlueRainbow from "./components/assets/blue_rainbow.png";
import RedBar from "./components/assets/red_bar.png";
import YellowBar from "./components/assets/yellow_bar.png";
import { useState } from "react";

const App = () => {
  const [cardId, setCardId] = useState(1);

  const data = [
    {
      icon: ShirtOne,
      name: "PSG Stadium 20/21",
      skuId: "123456",
      type: "Jerseys",
      time: "12.20.2020",
      status: "Published",
      id: 1,
    },
    {
      icon: ShirtTwo,
      name: "PSG Stadium 20/21",
      skuId: "123456",
      type: "Jerseys",
      time: "12.11.2023",
      status: "Pending",
      id: 2,
    },
    {
      icon: ShirtThree,
      name: "PSG Stadium 20/21",
      skuId: "123456",
      type: "Jerseys",
      time: "12.20.2020",
      status: "Published",
      id: 3,
    },
    {
      icon: ShirtFour,
      name: "PSG Stadium 20/21",
      skuId: "123456",
      type: "Jerseys",
      time: "12.20.2020",
      status: "Published",
      id: 4,
    },
    {
      icon: ShirtTwo,
      name: "PSG Stadium 20/21",
      skuId: "123456",
      type: "Jerseys",
      time: "12.11.2023",
      status: "Pending",
      id: 2,
    },
    {
      icon: ShirtFour,
      name: "PSG Stadium 20/21",
      skuId: "123456",
      type: "Jerseys",
      time: "12.20.2020",
      status: "Published",
      id: 4,
    },
  ];

  const miniCardData = [
    {
      icon: BlueRainbow,
      iconTwo: GreenRainbow,
      name: "Daily Income",
      amount: "$ 345",
      className: "w-[100px] h-[50px] -mt-10 border 2xl:w-[150px] 2xl:h-[80px]",
      id: 1,
    },
    {
      icon: BlueRainbow,
      iconTwo: GreenRainbow,
      name: "Daily Expense",
      amount: "$ 380",
      className: "w-[100px] h-[50px] 2xl:w-[150px] 2xl:h-[80px]",
      id: 2,
    },
    {
      icon: RedBar,
      iconTwo: RedBar,
      name: "Weekly Income",
      className: "w-[100px] h-[50px] border 2xl:w-[150px] 2xl:h-[80px]",
      amount: "$ 5380",
      id: 3,
    },
    {
      icon: YellowBar,
      iconTwo: YellowBar,
      name: "Weekly Expense",
      amount: "$ 4320",
      className: "w-[40px]",
      id: 4,
    },
  ];

  return (
    <DashboardLayout>
      <MiniCard
        data={miniCardData}
        cardId={cardId}
        onClick={(e: any) => setCardId(e)}
      />
      <div className=" flex flex-col xl:flex-row mt-10 space-y-4 xl:space-y-0 xl:space-x-8 mb-5">
        <div className=" flex xl:justify-start justify-center w-full  xl:w-auto bg-white">
          <div className="sm:w-[450px] bg-white sm:h-[450px] p-5 mt-6 h-[250px] w-[250px]">
            <h1 className="text-[#7e8b96]">Top Selling Categories</h1>
            <RadarChart />
          </div>
        </div>
        <AppointmentTable data={data} />
      </div>
    </DashboardLayout>
  );
};

export default App;
