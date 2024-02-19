import { useContext } from "react";
import ProductContext from "../contexts/ProductInfo";
function Checkout() {
	const { products, cartList } = useContext(ProductContext);
	let subtotal = 0;
	let shippingCost = 0;
	for (let idx of cartList) {
		subtotal += products[idx - 1].price;
	}
	return (
		<div className='border rounded-md w-1/2 p-4 h-64 bg-gray-50 flex flex-col'>
			<div>
				<p className='text-center text-xl font-semibold'>
					Order Summary
				</p>
			</div>
			<div className='flex flex-col justify-between grow mt-3'>
				<div>
					<div className='flex items-center justify-between mb-2'>
						<p className='text-gray-600'>Subtotal</p>
						<p>${subtotal}</p>
					</div>
					<div className='flex items-center justify-between'>
						<p className='text-gray-600'>Shipping</p>
						<p>{shippingCost ? `$${shippingCost}` : "Free"}</p>
					</div>
				</div>

				<div className='flex items-center justify-between'>
					<p className='text-lg font-semibold'>Total</p>
					<p>${shippingCost + subtotal}</p>
				</div>
			</div>
		</div>
	);
}
export default Checkout;
