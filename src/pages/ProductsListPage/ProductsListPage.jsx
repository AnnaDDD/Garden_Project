import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import ProductsList from '../../components/ProductsList/ProductsList';
import styles from './ProductsListPage.module.css';
import { fetchAllProductsList, fetchCategoryListById } from '../../asyncActions/products';
import { Filter } from '../../components/Filter/Filter';

function ProductsListPage() {

	const { state } = useLocation();

	const { id } = useParams();
	const dispatch = useDispatch();

	const pageTitle = useSelector((store) => store.products.pageTitle);
	
	const productsList = useSelector(
		(store) => store.products.productslist
	).filter((product) => product.rangeVisible && product.discontVisible);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (state === 'category') {
			dispatch(fetchCategoryListById(id));
		} else {
			dispatch(fetchAllProductsList(state));
		}
	}, [dispatch, id, state]);

	return (
		<section className={styles.products_page}>
			<div className="container">
				<h1 className="title">{pageTitle.title}</h1>
				<Filter content={state} />
				<ProductsList products={productsList} />
			</div>
		</section>
	);
}

export default ProductsListPage