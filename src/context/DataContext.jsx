import React, { createContext, useState, useEffect } from "react";
import work from "../assets/icon-work.svg";
import play from "../assets/icon-play.svg";
import study from "../assets/icon-study.svg";
import exercise from "../assets/icon-exercise.svg";
import social from "../assets/icon-social.svg";
import selfcare from "../assets/icon-self-care.svg";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      title: "Work",
      image: work,
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      image: play,
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      image: study,
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      image: exercise,
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      image: social,
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      image: selfcare,
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ]);
  const [timeframe, setTimeframe] = useState("Daily");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (timeframe === "Daily") {
        const newData = data.map((item, index) => {
          return { title: data[index].title, image: data[index].image, timeframes: data[index].timeframes.daily };
        });
        setFilteredData(newData);
      } else if (timeframe === "Weekly") {
        const newData = data.map((item, index) => {
          return { title: data[index].title, image: data[index].image, timeframes: data[index].timeframes.weekly };
        });
        setFilteredData(newData);
      } else {
        const newData = data.map((item, index) => {
          return { title: data[index].title, image: data[index].image, timeframes: data[index].timeframes.monthly };
        });
        setFilteredData(newData);
      }
    }

    return () => (isSubscribed = false);
  }, [timeframe]);

  return <DataContext.Provider value={{ timeframe, setTimeframe, filteredData }}>{children}</DataContext.Provider>;
};

export default DataProvider;
export { DataContext };
