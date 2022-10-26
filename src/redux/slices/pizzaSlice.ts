import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type TPizzaItem = {
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

interface IPizzaSlice {
  items: TPizzaItem[];
  status: EStatus;
}

const initialState: IPizzaSlice = {
  items: [],
  status: EStatus.LOADING,
};

type FetchArg = Record<string, string>;

export const fetchPizzas = createAsyncThunk<TPizzaItem[], FetchArg>(
  'pizza/fetchStatus',
  async (params) => {
    const { currentPage, category, sortBy, order, search } = params;
    const { data } = await axios.get<TPizzaItem[]>(
      `https://634feb7878563c1d82b38ce5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, actoin: PayloadAction<TPizzaItem[]>) {
      state.items = actoin.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = EStatus.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = EStatus.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = EStatus.ERROR;
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
