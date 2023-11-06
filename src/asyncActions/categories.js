import { addCategoriesList } from '../store/categoriesSlice';


export const fetchCategoriesList = () => {
	return function (dispatch) {
		fetch('http://localhost:3333/categories/all')
			.then((res) => res.json())
			.then((data) => dispatch(addCategoriesList(data)));
	};
};


// fetch('http://localhost:3333/products/all')
// .then((res) => res.json())
// .then((data) => console.log(data));