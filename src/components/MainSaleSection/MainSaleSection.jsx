// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import ProductsList from '../ProductsList/ProductsList';
// import { fetchSaleProductsList } from '../../asyncActions/products';

// function MainSaleSection() {

//   // const dispatch = useDispatch();

// 	// useEffect(() => dispatch(fetchSaleProductsList()), [dispatch]);

// 	// const products = useSelector((store) => store.products);
 

// 	// const targetProducts = products?.productsList.slice(0, 4);
//   // console.log(targetProducts);
//   return (
   
//     <div></div>
//     // <div><ProductsList products={targetProducts}/></div>
//   )
// }

// export default MainSaleSection



import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductsList } from './../../asyncActions/products';
import styles from './MainSaleSection.module.css';
import ProductsList from '../ProductsList/ProductsList';


function MainSaleSection() {

	let dispatch = useDispatch();

	useEffect(() => dispatch(fetchAllProductsList('sale')), [dispatch]);

	const products = useSelector((store) => store.products.productslist)
		.filter((product) => product.discont_price)
		.slice(0, 4);

	return (
		<section id="sale" className={styles.sale}>
			<div className="container">
				<h2 className="title">Sale</h2>
				<ProductsList products={products} />
			</div>
		</section>
	);

}

export default MainSaleSection




