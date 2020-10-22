import React from "react";
import { Card, Button } from "antd";

const ProductsList = () => {
	const [cartProducts, setCartProducts] = React.useState([]);
	const [products, setProducts] = React.useState(getProducts());

	const handleAddProductToCart = (productID) => {
		setCartProducts([...cartProducts, productID]);
	};
	const handleRemoveFromCart = (productID) => {
		const newCartProducts = cartProducts.filter((id) => id !== productID);
		setCartProducts(newCartProducts);
	};
	return (
		<>
			<div>
				<h1>Select a product</h1>
				{products.map((product) => {
					const { id, name, price, photo } = product;
					let haveInCart = false;

					cartProducts.forEach((productID) => {
						if (productID === id) {
							haveInCart = true;
						}
					});

					return (
						<Card title={name} key={id}>
							<p>{price}</p>
							<p>{photo}</p>
							{!haveInCart ? (
								<Button
									onClick={() => handleAddProductToCart(id)}
									type='primary'
								>
									Add to shopping cart
								</Button>
							) : (
									<Button
										onClick={() => handleRemoveFromCart(id)}
										type='primary'
										danger
									>
										Remove from shopping cart
									</Button>
								)}
						</Card>
					);
				})}
			</div>
			<div>
				<h1>Your shopping cart</h1>
				{cartProducts.length > 0
					? cartProducts.map((productID) => {
						const productIndex = products.findIndex((product) => {
							return product.id === productID;
						});
						let { name, id, price } = products[productIndex];
						return (
							<Card title={name} key={id}>
								<p>{price}</p>
							</Card>
						);
					})
					: "Your shopping cart is empty."}
			</div>
		</>
	);
};

const getProducts = () => [
	{
		id: 1,
		name: "Banana",
		price: "10$",
	},
	{
		id: 2,
		name: "Apple",
		price: "8$",
	},
	{
		id: 3,
		name: "Papaya",
		price: "10$",
	},
];

export default ProductsList;
