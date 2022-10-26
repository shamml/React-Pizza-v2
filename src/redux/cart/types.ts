export type TCartItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  size: number;
  count: number;
};

export interface ICartState {
  items: TCartItem[];
  totalPrice: number;
}
