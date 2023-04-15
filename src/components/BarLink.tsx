
interface BarLinkProps {
  Icon?: any;
  SelectIcon?: any;
  path: string;
  name: string;
  exact?: boolean | false;
}
export const BarLink = ({ Icon, path, SelectIcon, name, exact }: BarLinkProps) => {
  const router = window.location.pathname;
  let isActive = exact ? router === path : router.includes(path);
  return (
    <a href={path}>
      <div
        className={`flex justify-between   lg:ml-[30px]   hover:bg-[#edeffa] sm:pl-3   rounded-r-lg rounded-bl-lg   space-x-1 ml-[12px] mr-[30%] md:mr-[20%] lg:mr-[30%] xl:mr-[20%] lg:justify-start  py-2  mt-3  mb-[15px] lg:py-[8px] gap-2 items-center cursor-pointer  ${
          isActive ? " text-[#7283dd] bg-[#edeffa]" : "text-[#89959f] "
        }`}
      >
        <div className="flex space-x-2  ">
          <Icon />
          <span
            className={`whitespace-nowrap -mt-0.5 font-[500]  ${
              isActive ? "text-[#7283dd]" : "text-[#89959f]"
            } hidden lg:block text-[14px] font-lato font-normal `}
          >
            {name}
          </span>
        </div>
        <div className="">{name === "Reports" && <SelectIcon />}</div>
      </div>
    </a>
  );
};
