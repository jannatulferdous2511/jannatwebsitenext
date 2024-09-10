import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

type Props = {};

const Portfolio = (props: Props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.selectTitle}>Choose A Gallery</h1>
			<div className={styles.items}>
				<Link href="/portfolio/illustrations" className={styles.portfolioItems}>
					<span className={styles.title}>Illustrations</span>
				</Link>
				<Link href="/portfolio/website" className={styles.portfolioItems}>
					<span className={styles.title}>Website</span>
				</Link>
				<Link href="/portfolio/applications" className={styles.portfolioItems}>
					<span className={styles.title}>Applications</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
