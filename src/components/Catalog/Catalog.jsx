import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Catalog.module.css';
import { CategoriesList } from '../CategoriesList/CategoriesList';

function Catalog() {
  return (
    <section id="catalog" className={styles.catalog}>
    <div className="container">
      <div className={styles.catalog_top}>
        <h2 className="title">Catalog</h2>
        <NavLink to="/categories" className={styles.catalog_link}>
          <p>All categories </p>
        </NavLink>
      </div>
      <CategoriesList listLength={4} />
    </div>
  </section>
  )
}

export default Catalog
