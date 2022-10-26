export enum ESortProperty {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
}

export type TSort = {
  name: string;
  sortProperty: ESortProperty;
};

export interface IFilterState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: TSort;
}
