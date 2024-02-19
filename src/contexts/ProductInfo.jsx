import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
const ProductContext = createContext();
function Provider({ children }) {
	const [products, setProducts] = useState([]);
	const [cartList, setCartList] = useState([]);
	const removeCartItem = (key) => {
		const newList = cartList.filter((idx) => {
			return idx != key;
		});
		setCartList(newList);
	};
	const addToCart = (id) => {
		const newList = [...cartList];
		if (!newList.includes(id)) {
			newList.push(id);
		}
		setCartList(newList);
	};
	const fetchProducts = async () => {
		const respose = await axios.get("https://dummyjson.com/products");
		setProducts(respose.data.products);
	};
	const getItemCount = () => {
		return cartList.length;
	};
	return (
		<ProductContext.Provider
			value={{
				products,
				fetchProducts,
				cartList,
				setCartList,
				removeCartItem,
				addToCart,
				getItemCount,
			}}>
			{children}
		</ProductContext.Provider>
	);
}
export default ProductContext;
export { Provider };
