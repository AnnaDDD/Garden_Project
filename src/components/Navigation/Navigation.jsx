import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Navigation() {
  return (
    <nav>
        <ul>
            <li><HashLink smooth to="/" >Main Page</HashLink></li>
            <li><HashLink smooth to="/products" state="all" >All products</HashLink></li>
            <li><HashLink smooth to="/products" state="sale">All sales</HashLink></li>
        </ul>
    </nav>
  )
}

export default Navigation


// import { NavLink } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import styles from './Navigation.module.css';

// export const Navigation = ({ ...other }) => {

// 	return (
// 		<nav className={styles.nav}>
// 			<ul className={styles.nav_list}>
// 				<li className={styles.nav_item}>
// 					<HashLink
// 						className={styles.nav_link}
// 						smooth
// 						to="/#home"
// 						{...other}>
// 						Main Page
// 					</HashLink>
// 				</li>
// 				<li>
// 					<HashLink
// 						className={styles.nav_link}
// 						smooth
// 						to="/products"
// 						state="all"
// 						{...other}
// 					>
// 						All products
// 					</HashLink>
// 				</li>
// 				<li>
// 					<NavLink
// 						className={styles.nav_link}
// 						to="/products"
// 						state="sale"
// 						{...other}
// 					>
// 						All sales
// 					</NavLink>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// };
