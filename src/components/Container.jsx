import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./Container.css";
import Card from "./Card";
import MainCard from "./MainCard";

const Container = () => {
  const { filteredData } = useContext(DataContext);

  return (
    <main className="container">
      <section className="grid__container">
        <MainCard />
        {filteredData.map((item, index) => (
          <Card key={index} title={item.title} img={item.image} current={item.timeframes.current} previous={item.timeframes.previous} />
        ))}
      </section>
    </main>
  );
};

export default Container;
