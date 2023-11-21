import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoriesList } from '../../asyncActions/categories';
import styles from './CategoriesList.module.css';
import { CategoryItem } from '../CategoryItem/CategoryItem';

export const CategoriesList = ({ listLength = 8 }) => {
	
	const dispatch = useDispatch();

	useEffect(() => dispatch(fetchCategoriesList()), [dispatch]);

	const categories = useSelector((store) => store.categories);

	const targetCategories = categories.slice(0, listLength);

	return (
		<ul className={styles.categories_list}>
			{targetCategories.map((category, index) => (
				<CategoryItem key={index} {...category} />
			))}
		</ul>
	);
};
