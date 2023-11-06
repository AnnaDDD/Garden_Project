import { getProductInfo } from '../store/productInfoSlice';
import {addProductsList, addProductsListWhithSale} from '../store/productsSlice';

export const fetchCategoryListById = (id) => {
	return function (dispatch) {
		fetch(`http://localhost:3333/categories/${id}`)
			.then((res) => res.json())
			.then((data) => dispatch(addProductsList(data)));
	};
};

export const fetchAllProductsList = (type) => {
	return function (dispatch) {
		fetch(`http://localhost:3333/products/all`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(addProductsList({ data, category: {} }));
				if (type === 'sale') {
					dispatch(addProductsListWhithSale());
				}
			});
	};
};

export const fetchProductByID = (product) => {
	return function (dispatch) {
		fetch('http://localhost:3333' + product)
			.then((res) => res.json())
			.then((data) => dispatch(getProductInfo(data)));
	};
};