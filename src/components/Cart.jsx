import { useContext } from "react";
import ProductContext from "../contexts/ProductInfo";
import Checkout from "./Checkout";
import CartItem from "./CartItem";
import Button from "./Button";
function Cart() {
	const { products, cartList, removeCartItem } = useContext(ProductContext);

	const cartItems = cartList.map((id) => {
		console.log(id);
		return (
			<CartItem
				key={id}
				title={products[id - 1].title}
				price={products[id - 1].price}
				img={products[id - 1].thumbnail}
				id={id}
				removeItem={removeCartItem}
			/>
		);
	});
	const cartInfo = !cartList.length ? (
		<p className='text-3xl text-gray-600 text-center mt-12'>
			Your Cart is Empty...
		</p>
	) : (
		<div>
			<div className='grid grid-cols-2 p-3 mt-5 '>
				<div>{cartItems}</div>
				<div className='flex flex-col justify-start items-center '>
					<Checkout />
					<Button
						className='w-1/2 flex items-center justify-center text-xl mt-4'
						rounded
						success>
						Checkout
					</Button>
				</div>
			</div>
		</div>
	);
	return (
		<div>
			<p className='text-5xl text-center mt-12 mb-3'>Your Cart</p>
			{cartInfo}
		</div>
	);
}
export default Cart;
