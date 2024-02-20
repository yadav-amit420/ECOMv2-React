import React, {createContext} from 'react';
import {useState} from 'react';
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () =>  {
		let cart = {};
		for (let index = 0; index  < all_product.length+1 ; index++){
			cart[index] = 0;
		}
		return cart;
	}

const ShopContextProvider = (props) => {
	
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const addToCart = (itemId) =>{
		setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
	}

	const removeFromCart = (itemId) =>{
		setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
	}

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for(const it in cartItems){
			if(cartItems[it]>0){
				let itemInfo = all_product.find((product)=>product.id === Number(it));
				totalAmount += itemInfo.new_price * cartItems[it];
			}
		}
		return totalAmount;
	}

	const getTotalCartItem = () =>{
		let totalItem = 0;
		for(const it in cartItems){
			if(cartItems[it]>0){
				totalItem += cartItems[it];
			}
		}
		return totalItem;
	}

	const contextValue = {getTotalCartItem,all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount};
	return(
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider;