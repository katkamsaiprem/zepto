import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  
  initialState: {
    items: [],
    total: 0,
  },
  
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      state.items.push(product);
      state.total = state.total + product.price;
    },
    
    removeItem: (state, action) => {
      const productName = action.payload;
      const product = state.items.find(item => item.name === productName);
      
      if (product) {
        state.total = state.total - product.price;
        state.items = state.items.filter(item => item.name !== productName);
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
