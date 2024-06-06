import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
}
interface ProductCart {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}
interface State{
    cart:ProductCart[]
}

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart:[],
  },
  reducers: {
    addProduct:(state:State,action:PayloadAction<Products>):void=>{
        const index = state.cart.findIndex(item=>item.id===action.payload.id)
        if(index>-1){
            state.cart[index].quantity+=1
        }else{
            state.cart.push({...action.payload,quantity:1})
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const {addProduct} = cartSlice.actions;

export default cartSlice.reducer;
