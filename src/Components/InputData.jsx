import React, { useState } from "react";


const InputData = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const[validData,setValidData]=useState(false)

  const handleStartDateChange = (event) => {
    const newStartDate = new Date(event.target.value);
    setDateRange({ ...dateRange, startDate: newStartDate });
  };

  const handleEndDateChange = (event) => {
    const newEndDate = new Date(event.target.value);
    setDateRange({ ...dateRange, endDate: newEndDate });
  };

  const isDateRangeValid = () => {
    if (dateRange.startDate && dateRange.endDate) {
      const timeDifference = dateRange.endDate - dateRange.startDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      if(daysDifference<=7){
        setValidData(true);
      }else{
        setValidData(false);
      }
    }

  };

  
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto py-10">
          <div className="flex w-full justify-between items-center">
            <h2 className="w-2/4 text-2xl font-semibold text-[#718096]">
              Search Nearest Asteriods
            </h2>
            <div className="flex flex-col w-[20%]">
              <label
                className="text-[#718096]  text-base font-semibold"
                htmlFor=""
              >
                Enter Asteriod ID
              </label>
              <input
                className="border px-2 py-2 text-bold rounded w-full"
                type="number"
                placeholder="Enter a ID"
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="text-[#718096] text-base font-semibold"
                htmlFor=""
              >
                Start Date
              </label>
              <input
                className="border px-2 py-2 rounded"
                type="Date"
                placeholder="-"
                onChange={handleStartDateChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[#718096] text-base font-semibold"
                htmlFor=""
              >
                End Date
              </label>
              <input
                className="border px-2 py-2 rounded"
                type="Date"
                placeholder="Enter a number"
                onChange={handleEndDateChange}
              />
            </div>
            <div>
              {isDateRangeValid() ? (
                <p className="opacity-0 absolute right--20">
                  Date range is valid (gap is less than or equal to 7 days)
                </p>
              ) : (
                <p className="absolute right-0 w-80 p-4  bg-red-500 text-white">
                  {" "}
                  <span className="font-bold">Alert</span> <br />
                  Please ensure that the ates should be in between 7 days
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
