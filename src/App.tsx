import {
  AppointmentTable,
  DashboardLayout,
  LineChart,
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
import {  BsArrowUpShort } from "react-icons/bs";

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
      <div className="w-full h-[600px] mb-10 rounded-lg  bg-white px-5 pt-6 pb-60 md:pb-40">
        <div className="space-y-5">
          <div className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 justify-between border-b pb-5">
            <h2 className="md:text-[18px] text-[16px] text-[#252c33] font-semibold">
              Sales Overview
            </h2>
            <button className="bg-gradient-to-r from-[#3187e6] to-[#4b62d3] text-[15px]  text-[white] w-[120px] md:w-[170px] py-2 rounded-lg">
              + Add Offer
            </button>
          </div>
          <div className="pb-5 flex md:flex-row flex-col space-y-2 md:space-y-0 justify-between">
            <div className="flex space-x-2 sm:space-x-4">
              <h1 className="md:text-[30px] text-[18px] sm:text-[24px] text-[#0c1e29] font-semibold">
                $80,630
              </h1>
              <div className="bg-[#e5f6f5] sm:mt-1 md:mt-2 flex justify-center py-1.5 w-[25px] h-[25px] rounded-full">
                <BsArrowUpShort className="text-[18px] -mt-0.5 text-[#1db2ad] font-bold" />
              </div>
              <p className="text-[#1db2ad] font-lato text-[14px] font-semibold sm:mt-1 md:mt-2">
                +6,7%
              </p>
            </div>
            <div className="flex sm:flex-row flex-col space-x-2 sm:space-x-8">
              <div className="flex space-x-2 sm:space-x-8">
                <div className="flex space-x-1 my-auto">
                  <div className="bg-[#5e8be2] mt-2 flex justify-center w-[7px] h-[7px] rounded-full"></div>
                  <h6 className="text-[12px] mt-0.5 text-[#7e8b96]">Incomes</h6>
                </div>
                <div className="flex space-x-1 my-auto">
                  <div className="bg-[#df7aad] mt-2 flex justify-center w-[7px] h-[7px] rounded-full"></div>
                  <h6 className="text-[12px] mt-0.5 text-[#7e8b96]">
                    Expenses
                  </h6>
                </div>
              </div>
              <select
                name=""
                id=""
                className="w-[140px] h-[40px] border rounded-md border-[#7e8b96] outline-none focus:border-none focus:outline-none"
              >
                <option value="year">Year</option>
                <option value="year">Month</option>
              </select>
            </div>
          </div>
        </div>
        <LineChart />
      </div>
      <MiniCard
        data={miniCardData}
        cardId={cardId}
        onClick={(e: any) => setCardId(e)}
      />
      <div className=" flex flex-col xl:flex-row mt-10 space-y-4 xl:space-y-0 xl:space-x-8 mb-5">
        <div className=" flex xl:justify-start justify-center w-full  xl:w-auto rounded-lg  bg-white">
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
