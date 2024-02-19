import Card from "./Card";
import { useContext, useEffect } from "react";
import ProductContext from "../contexts/ProductInfo";
function Shop() {
	const { products, fetchProducts, addToCart } = useContext(ProductContext);
	useEffect(() => {
		fetchProducts();
	}, []);
	const renderedList = products.map((product) => {
		if (product.id < 19)
			return (
				<Card
					key={product.id}
					title={product.title}
					rating={product.rating}
					price={product.price}
					img={product.thumbnail}
					className='my-8 mx-3'
					id={product.id}
					addToCart={addToCart}
				/>
			);
	});
	return (
		<div>
			<div className='p-3 flex flex-wrap justify-evenly'>
				{renderedList}
			</div>
		</div>
	);
}
export default Shop;
