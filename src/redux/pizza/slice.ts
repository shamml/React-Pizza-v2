import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizzaSlice, TPizzaItem, EStatus } from './types';
import { fetchPizzas } from './asyncActions';

const initialState: IPizzaSlice = {
  items: [],
  status: EStatus.LOADING,
};

const slice = createSlice({
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

export const { setItems } = slice.actions;

export default slice.reducer;
