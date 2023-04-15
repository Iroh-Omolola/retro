
type DataProps = {
  icon?: any;
  name?: string;
  skuId?: string;
  type?: string;
  time?: string;
  status?: string;
  id?: number;
};
type TableProps = {
  data: Array<DataProps>;
  className?: String;
};
export const AppointmentTable = ({ data }: TableProps) => {
  return (
    <div className="flex   bg-white shadow-md shadow-shadow_color pt-6 rounded-lg  w-full flex-col  mt-6">
      <h4 className="text-[14px] font-lato  mb-3 text-[#75838f] pl-6">
        Latest Added Products
      </h4>
      <div className="w-full">
        <div className="inline-block w-full  py-2">
          <div className="w-full overflow-x-scroll">
            <table className="w-full ">
              <tbody>
                {data?.map((tableData, index) => (
                  <tr key={index + 1} className={`table-row text-left  gap-5 `}>
                    <td className="pl-6 py-3 pr-3 whitespace-nowrap ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 ">
                          <div className="w-9 h-10 bg-[#efefef] -mt-2 rounded-md  mr-2 ">
                            <img src={tableData.icon} alt="Retro logo" />
                          </div>
                        </div>
                        <div className="ml-1">
                          <h1 className="text-[15px] font-lato ">
                            {tableData?.name}
                          </h1>
                          <p className="text-[12px] text-[#acb5bc]">
                            3 Variants
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      className={`py-3 text-[14px] flex  pr-3 text-text_black   whitespace-nowrap`}
                    >
                      <h1 className="text-[grey]">SKU:</h1>
                      {tableData?.skuId}
                    </td>
                    <td className="py-3  text-[14px] pr-3 text-text_black     whitespace-nowrap">
                      <h1 className="-mt-3">{tableData?.type}</h1>
                    </td>
                    <td className=" py-3 text-[14px] pr-3 text-text_black    whitespace-nowrap">
                      <h1 className="-mt-3">{tableData?.time}</h1>
                    </td>
                    <td className="py-3 justify-end flex text-[12px]  pr-6 text-text_black  whitespace-nowrap">
                      <div>
                        <p
                          className={`${
                            tableData.status === "Pending"
                              ? "bg-[#ffe8e2] text-[#fd9f83]"
                              : "bg-[#e5f6f5] text-[#60cecb]"
                          }  rounded-full  text-center px-2 py-0.5`}
                        >
                          {tableData?.status}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
