import React from "react";
import "./scss/app.scss";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort/Sort";
import { PizzaBlock } from "./components/PizzaBlock";

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
