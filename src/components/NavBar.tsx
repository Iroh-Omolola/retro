import {Profile  } from "./assets";
import { AiOutlineSearch } from "react-icons/ai";

export const NavBar = () => {
  return (
    <div
      className={`flex  pt-3 bg-[#f4f8fc]  pb-3 w-full sm:min-h-[38px]  items-center justify-between`}
    >
      <div className="flex  bg-[#e8eef4]  rounded-md mt-2  xs:w-[200px] md:w-[250px] ">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="outline-none bg-[transparent] focus:ring-0 focus:border-none focus:outline-none border-none ring-0  text-[#83919d] font-[500] px-[15px] text-[13px]  block w-full p-2"
        />
        <div className="flex my-auto pr-5">
          <AiOutlineSearch className="w-[15px] h-[15px]  text-[#83919d]" />
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="sm:block hidden text-end relative mt-2">
          <h4 className="text-[#495863] font-lato font-semibold text-[14px]">
            jamesbrown@example.com
          </h4>
          <p className="text-[#a1adb6] text-sm">Admin</p>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <a
            href="/#"
            className="w-[30px] h-[30px] flex rounded-full object-contain gap-1 items-center ml-5 cursor-pointer"
          >
            <Profile />
          </a>
        </div>
      </div>
    </div>
  );
};
