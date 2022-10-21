import React from 'react';

export function Categories({ categoryId, handleCategory }) {
  const category = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {category.map((items, i) => (
          <li
            key={i}
            onClick={() => handleCategory(i)}
            className={categoryId === i ? 'active' : ''}
          >
            {items}
          </li>
        ))}
      </ul>
    </div>
  );
}
