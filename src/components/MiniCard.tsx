interface Props {
  icon: any;
  iconTwo?: any;
  name: string;
  amount: string;
  id: number;
}
type MiniCardProps = {
  data: Array<Props>;
  onClick: any;
  className?: string;
  cardId: number;
};
export const MiniCard = ({
  data,
  className,
  cardId,
  onClick,
}: MiniCardProps) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 2xl:gap-8">
      {data.length > 0 &&
        data?.map((d) => (
          <div
            key={d.id}
            className={`${
              cardId === d.id
                ? "bg-gradient-to-r from-[#4581df] to-[#4669d6]"
                : "bg-[white]"
            } lg:w-[100%] cursor-pointer h-[128px] py-4 px-4  space-x-6 shadow-[#e1e0e0] shadow-md rounded-[8px]`}
            onClick={onClick}
          >
            <div className="space-y-2">
              <h4
                className={`text-[14px] mt-4 ${
                  cardId === d.id ? "text-[white]" : "text-[#778591]"
                }   whitespace-nowrap  font-lato`}
              >
                {d.name}
              </h4>
              <div className="flex justify-between">
                <p
                  className={`text-[28px] font-semibold ${
                    cardId === d.id ? "text-[white]" : "text-[#11232e]"
                  }  font-lato`}
                >
                  {d.amount}
                </p>
                <img
                  src={cardId === d.id ? d.icon : d.iconTwo}
                  className={`${
                    d.id == 1 || d.id == 2
                      ? "2xl:-mt-5 lg:-mt-8 md:-mt-5 sm:-mt-5  w-[100px] h-[40px]   sm:w-[120px] sm:h-[60px]   md:w-[120px] md:h-[60px]  lg:w-[150px] lg:h-[80px] 2xl:w-[120px] 2xl:h-[60px] "
                      : "2xl:-mt-5 lg:-mt-8 md:-mt-5  -mt-3 h-[40px] w-[40px] sm:-mt-5 sm:w-[60px] sm:h-[60px] md:h-[60px] lg:h-[80px] 2xl:h-[60px]"
                  }  ${className}`}
                  alt="Retro logo"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
