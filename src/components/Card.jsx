import { BsCartPlus } from "react-icons/bs";
function Card({ id, title, rating, price, img, className, addToCart }) {
	const handleClick = () => {
		addToCart(id);
	};
	const classes = `shadow-lg w-64 rounded-md border flex flex-col ${className}`;
	return (
		<div className={classes}>
			<div className='h-3/5 flex justify-center items-center rounded-md'>
				<img src={img} alt='' />
			</div>
			<div className='bg-gray-50 p-3 flex flex-col justify-between grow'>
				<div>
					<p className='text-base font-semibold mt-2 mb-1'>{title}</p>
					<p className='text-sm mb-1'>{rating}/5</p>
				</div>

				<div className='flex justify-between items-center mt-6'>
					<p className='font-bold'>${price}</p>

					<BsCartPlus
						onClick={handleClick}
						className='cursor-pointer size-7 text-gray-500 hover:text-green-600 ease-in duration-100'
					/>
				</div>
			</div>
		</div>
	);
}
export default Card;
