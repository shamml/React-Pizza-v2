import { TCartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: TCartItem[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0);
  // state.totalCount = state.items.reduce((sum, item) => sum + item.count);
};
