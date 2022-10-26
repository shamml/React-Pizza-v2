import React from 'react';
// import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

type TCategoriesProps = {
  categoryId: number;
  handleCategory: (i: number) => void;
};

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

export const Categories: React.FC<TCategoriesProps> = React.memo(
  ({ categoryId, handleCategory }) => {
    // useWhyDidYouUpdate('Categories', { categoryId, handleCategory });

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
  },
);
