import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartById } from '../../redux/cart/selectors';
import { TCartItem } from '../../redux/cart/types';
import { addItem } from '../../redux/cart/slice';

const typeNames = ['тонкое', 'традиционное'];

type TPizzaBlockProps = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
  rating: number;
};

export const PizzaBlock: React.FC<TPizzaBlockProps> = ({
  id,
  imageUrl,
  name,
  price,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const [activeTypes, setActiveTypes] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const handleAdd = () => {
    const item: TCartItem = {
      id,
      name,
      imageUrl,
      price,
      type: typeNames[activeTypes],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, i) => (
              <li
                key={i}
                onClick={() => setActiveTypes(i)}
                className={activeTypes === i ? 'active' : ''}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? 'active' : ''}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price}</div>
          <div
            onClick={handleAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};
