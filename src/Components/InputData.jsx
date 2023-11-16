import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../assets/Spin-1.6s-224px.gif";
import AsteriodApi from "./AsteriodApi";

const InputData = () => {
  const [date, setDate] = useState({
    StartDate: "",
    EndDate: "",
  });
  const [validDateErr, setValidDateError] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const validDateRange = () => {
    if (date.StartDate && date.EndDate) {
      const startDate = new Date(date.StartDate);
      const endDate = new Date(date.EndDate);
      const timeDifference = Math.abs(endDate - startDate);
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      if (daysDifference <= 7) {
        setValidDateError(false);
        setIsLoading(true);
        fetchApiData();
        setShowData(false);
      } else {
        setValidDateError(true);
        setShowData(false);
      }
    }
  };

  const fetchApiData = async () => {
    try {
      const resp = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date.StartDate}&end_date=${date.EndDate}&api_key=qSPWLWuE0Myh5d3QtoTmQ9ALqULc5t0zZ3SHAiyF`
      );

      const ApiFullData = Object.keys(resp.data.near_earth_objects).reduce(
        (acc, dateKey) => [...acc, ...resp.data.near_earth_objects[dateKey]],
        []
      );
      console.log(ApiFullData);

      setApiData(ApiFullData);
      setIsLoading(false);
      setShowData(true);
    } catch (error) {
      setApiError(error.error_message);
      setShowData(false);
    }
  };

  useEffect(() => {
    validDateRange();
    setTimeout(() => {
      setValidDateError(false);
    }, 3200);
  }, [date.StartDate, date.EndDate]);

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto py-10">
          <div className="flex w-full justify-between items-center ">
            <h2 className="w-[64%] text-2xl font-semibold text-[#718096]">
            {showData
                ? `${apiData.length} Nearest Asteroids as per their closest approach`
                : "Search Nearest Asteroids"}
            </h2>
            <form
              className="flex w-[37%] justify-between items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col w-[32%]">
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
                  value={date.StartDate}
                  onChange={(e) =>
                    setDate({ ...date, StartDate: e.target.value })
                  }
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
                  placeholder=""
                  value={date.EndDate}
                  onChange={(e) =>
                    setDate({ ...date, EndDate: e.target.value })
                  }
                />
              </div>
            </form>
            <div>
              {validDateErr ? (
                <div className="errorMsg py-4 px-2 fixed -right-0 top-12 bg-red-600 text-white w-80 flex items-center justify-between">
                  <div className="w-4/5">
                    <h2 className="text-xl">Alert</h2>
                    <p>please Enter Valid Input in the fields</p>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              {isLoading ? (
                <div className="fixed top-0 right-0 w-full h-screen bg-transparent-black flex items-center justify-center">
                  <img src={Loader} alt="Loading" className="w-1/12" />
                </div>
              ) : null}
            </div>
          </div>
          <div>
            {showData ? (
              <AsteriodApi apiError={apiError} apiData={apiData} isFav />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
