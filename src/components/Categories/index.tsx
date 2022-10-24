import React from 'react';

type CategoriesProps = {
  categoryId: number;
  handleCategory: any;
};

export const Categories: React.FC<CategoriesProps> = ({
  categoryId,
  handleCategory,
}) => {
  const categories = [
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
        {categories.map((items, i) => (
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
};
