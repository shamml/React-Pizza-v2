export type TPizzaItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
  rating: number;
};

export enum EStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IPizzaSlice {
  items: TPizzaItem[];
  status: EStatus;
}

export type FetchArg = Record<string, string>;
