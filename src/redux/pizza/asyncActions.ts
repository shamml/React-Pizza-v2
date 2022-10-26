import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchArg, TPizzaItem } from './types';
import axios from 'axios';

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
