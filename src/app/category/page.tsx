import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const Category = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>

			<div className={styles.categories}>
				<Link
					href="/ourFamily"
					className={`${styles.category} ${styles.youtube}`}
				>
					<Image
						src="/youtube.png"
						alt=" "
						width={32}
						height={32}
						className={styles.image}
					/>
					Family
				</Link>
				<Link
					href="/aboutus"
					className={`${styles.category} ${styles.facebook}`}
				>
					<Image
						src="/facebook.png"
						alt=" "
						width={32}
						height={32}
						className={styles.image}
					/>
					PetFamily
				</Link>
				<Link
					href="/portfolio"
					className={`${styles.category} ${styles.instagram}`}
				>
					<Image
						src="/instagram.jpg"
						alt=" "
						width={32}
						height={32}
						className={styles.image}
					/>
					Amra
				</Link>
				<Link
					href="/mayabi"
					className={`${styles.category} ${styles.instagram}`}
				>
					<Image
						src="/instagram.jpg"
						alt=" "
						width={32}
						height={32}
						className={styles.image}
					/>
					Mayabi
				</Link>
				<Link href="/mahim" className={`${styles.category} ${styles.youtube}`}>
					<Image
						src="/instagram.jpg"
						alt=" "
						width={32}
						height={32}
						className={styles.image}
					/>
					Mahim
				</Link>
			</div>
		</div>
	);
};

export default Category;
