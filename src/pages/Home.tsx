import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';

import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { PizzaBlock } from '../components/PizzaBlock';
import { Pagination } from '../components/Pagination';
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectPizzaData);

  const handleCategory = React.useCallback((value: number) => {
    dispatch(setCategoryId(value));
  }, []);

  const onChangePage = (value: number) => {
    dispatch(setCurrentPage(value));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items
    .filter((obj: any) =>
      obj.name.toUpperCase().includes(searchValue.toUpperCase()),
    )
    .map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} handleCategory={handleCategory} />
        <Sort  sortType={sort}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div>
          <h1>Произошла ошибка 😕</h1>
          <h2>Попробуйте повторить попытку позже.</h2>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeleton : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
