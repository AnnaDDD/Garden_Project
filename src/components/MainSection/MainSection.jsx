import React from 'react'
import styles from './MainSection.module.css'
import { HashLink } from 'react-router-hash-link';

function MainSection() {

	return (
		<section id="head" className={styles.head}>
			<div className="container">
				<div className={styles.head_content}>
					<div className={styles.head_inner}>
						<h1 className={styles.head_title}>
							Sale
							<span>New season</span>
						</h1>
						<HashLink
							smooth
							to="#sale"
							className={styles.head_link}
						>
							Sale
						</HashLink>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MainSection







