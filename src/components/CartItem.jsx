import { RxCross2 } from "react-icons/rx";
function CartItem({ id, img, title, price, removeItem }) {
	return (
		<div className='border flex items-center justify-between p-4 mb-3'>
			<div className='flex items-center'>
				<img className='size-16' src={img} alt='' />
				<p className='ml-3 text-sm font-semibold'>{title}</p>
			</div>
			<div className='flex items-center'>
				<p className='mr-12'>${price}</p>
				<RxCross2
					onClick={() => removeItem(id)}
					className='text-xl cursor-pointer hover:text-red-500 ease-in duration-100'
				/>
			</div>
		</div>
	);
}
export default CartItem;
