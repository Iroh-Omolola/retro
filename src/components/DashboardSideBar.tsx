import { Link } from "react-router-dom";
import { TbChartLine, TbWallet } from "react-icons/tb";
import { BsCart2, BsFlag } from "react-icons/bs";
import {
  HiOutlineChartBar,
  HiOutlineBriefcase,
  HiChevronDown,
} from "react-icons/hi";
import { FiSettings, FiUsers } from "react-icons/fi";
import routes from "../utils/routes";
import { BarLink } from "./BarLink";
import Logo from "./assets/retro_logo.png";

interface Props {
  exact?: boolean | false;
}
const BAR_ROUTES = [
  { name: "Dashboard", path: routes.DASHBOARD, Icon: TbChartLine, exact: true },
  {
    name: "Products",
    path: routes.PRODUCTS,
    Icon: TbChartLine,
    exact: false,
  },
  {
    name: "Blog",
    path: routes.BLOG,
    Icon: BsCart2,
    exact: false,
  },
  {
    name: "Transactions",
    path: routes.TRANSACTIONS,
    Icon: TbWallet,
    exact: false,
  },
  { name: "Users", path: routes.USERS, Icon: FiUsers, exact: false },
  {
    name: "Analysis",
    path: routes.ANALYSIS,
    Icon: HiOutlineChartBar,
    exact: false,
  },
  {
    name: "Reports",
    path: routes.REPORTS,
    Icon: BsFlag,
    exact: false,
    SelectIcon: HiChevronDown,
  },
  {
    name: "Investment",
    path: routes.INVESTMENT,
    Icon: HiOutlineBriefcase,
    exact: false,
  },
  { name: "Settings", path: routes.SETTINGS, Icon: FiSettings, exact: false },
];
export const DashboardSideBar = ({ exact }: Props) => {
  return (
    <div className="h-full">
      <div className="w-[3rem]  xs:w-[5rem] lg:w-[16rem]">
        <div className="flex w-full flex-col items-center lg:items-start pl-0  lg:mt-0">
          <a href={"/"}>
            <div className="hidden lg:flex h-[60px] mt-[22px] mb-5  lg:pl-[26px] cursor-pointer ">
              <img src={Logo} alt="Retro logo" />
            </div>
          </a>
          <div
            className={`lg:hidden block h-[60px] md:w-[60px] w-[35px] xs:w-[50px] mt-[22px]  pl-0 lg:pl-[32px]`}
          >
            <img src={Logo} alt="Retro logo" />
          </div>

          <div className="mt-5 w-full">
            <div className="overflow-x-hidden w ">
              {BAR_ROUTES?.map((link, id) => (
                <BarLink key={id} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
