import React from 'react'
import { CategoriesList } from '../../components/CategoriesList/CategoriesList'
import styles from './CategoriesListPage.module.css';

function CategoriesListPage() {
  return (
    <section className={styles.categories_page}>
    <div className="container">
      <h1 className="title">Categories</h1>
      <CategoriesList />
    </div>
  </section>
  )
}

export default CategoriesListPage


