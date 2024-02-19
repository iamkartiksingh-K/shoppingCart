import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../contexts/ProductInfo";
function Navbar() {
	const { getItemCount } = useContext(ProductContext);
	const location = useLocation();
	const path = location.pathname;
	const pathArr = path.split("/");
	const currPath = pathArr[pathArr.length - 1];
	return (
		<nav className='border bg-white w-full h-16 flex items-center justify-between p-3 sticky top-0'>
			<div className=' flex justify-between items-center w-1/5 text-xl text-gray-800'>
				<Link to='/'>
					<img className='w-24 ' src='logo.png' alt='' />
				</Link>
				<Link
					to='/'
					className={
						currPath === "" ? "font-semibold text-yellow-500" : ""
					}>
					Home
				</Link>
				<Link
					to='shop'
					className={
						currPath === "shop"
							? "font-semibold text-yellow-500"
							: ""
					}>
					Shop
				</Link>
			</div>
			<Link to='cart' className={"relative "}>
				<MdOutlineShoppingCart className='text-4xl text-black m-1' />
				{getItemCount() !== 0 && (
					<span className='absolute -top-2 -right-2 w-6  h-6 text-sm border rounded-full flex justify-center items-center font-semibold bg-yellow-400'>
						{getItemCount()}
					</span>
				)}
			</Link>
		</nav>
	);
}
export default Navbar;
