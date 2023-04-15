import { ReactNode,  } from "react";
import { DashboardSideBar } from "./DashboardSideBar";
import { NavBar } from "./NavBar";

type DashboardLayoutProps = {
  children?: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-[100vh] w-[100%]">
      <div className="h-[100vh] w-[100%] relative flex">
        <div className="h-[100vh] min-w-[10%] lg:min-w-[15%] bg-white flex flex-col justify-between ">
          <DashboardSideBar />
        </div>
        <div className="w-full bg-[#f4f8fc]  flex flex-col rounded-tl-[30px] overflow-x-hidden ">
          <div className="md:flex bg-[#f4f8fc] py-2 px-8 lg:px-5 xl:px-10  fixed w-[90%] lg:w-[82%] xl:w-[85%] bg-mainBg md:flex-row mb-64 min-h-[70px] flex-col justify-between">
            <NavBar />
          </div>
          <div className="flex w-full h-full">
            <div className="mt-44 sm:mt-[150px] w-full px-8 lg:px-5 xl:px-10 ">
              <div className="w-full mb-32 overflow-hidden">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
