import React from "react";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { PizzaBlock } from "../components/PizzaBlock";

export function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoadind] = React.useState(true);

  React.useEffect(() => {
    fetch("https://634feb7878563c1d82b38ce5.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setIsLoadind(false);
      });
  }, []);

  console.log(pizzas);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((items) => <PizzaBlock key={items.id} {...items} />)}
      </div>
    </>
  );
}
