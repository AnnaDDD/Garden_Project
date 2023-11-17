// import React from 'react'

// function ProductsList({products}) {


//   return (
//     <ul>
//         {products.map((product) => <li key={product.id}>{product.title}</li>)}
//     </ul>
//   )
// }

// export default ProductsList


import { useEffect, useState } from 'react';
import styles from './ProductsList.module.css';
import { Pagination } from '../Pagination/Pagination';
import ProductItem from '../ProductItem/ProductItem';



function ProductsList({ products }) {
	const [currentPage, setCurrentPage] = useState(1);
	const quantity = 8;

	let lastElem = currentPage * quantity;
	let firstElem = lastElem - quantity;
	let pagesNumber = Math.ceil(products.length / quantity);

	const productsListPage = products.slice(firstElem, lastElem);

	useEffect(() => {
		if (Math.ceil(products.length / quantity) < currentPage) {
			setCurrentPage(Math.ceil(products.length / quantity) || 1);
		}
	}, [products, currentPage]);

	return (
		<>
			<ul className={styles.products_list}>
				{productsListPage?.map((elem, index) => (
					<ProductItem key={index} {...elem} />
				))}
			</ul>
			{pagesNumber > 1 && (
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					pagesNumber={pagesNumber}
				/>
			)}
		</>
	);
}

export default ProductsList


