import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';
const AboutPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<div className={styles.img}>
					<Image
						src="https://images.pexels.com/photos/135858/pexels-photo-135858.jpeg?cs=srgb&dl=pexels-ingewallu-135858.jpg&fm=jpg&_gl=1*1yjb4w7*_ga*MTExNjY0MzI5Mi4xNzE5ODA0MzA0*_ga_8JE65Q40S6*MTcyMDM3MDkwOS4zLjEuMTcyMDM3MTIwNy4wLjAuMA."
						alt=""
						fill={true}
						className={styles.img}
					/>
				</div>

				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>My MumMum</h1>
					<h2 className={styles.imgDesc}>He is my new kitty</h2>
				</div>
			</div>

			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who We Are</h1>
					<p className={styles.desc}>
						We try our best to give them food shelter and comfort.We try our
						best to give them food shelter and comfort. We try our best to give
						them food shelter and comfort. We try our best to give them food
						shelter and comfort.
						<br />
						We try our best to give them food shelter and comfort.We try our
						best to give them food shelter and comfort. We try our best to give
						them food shelter and comfort. We try our best to give them food
						shelter and comfort.
					</p>
				</div>

				<div className={styles.item}>
					<h1 className={styles.title}>What We Do</h1>
					<p className={styles.desc}>
						We try our best to give them food shelter and comfort.We try our
						best to give them food shelter and comfort. We try our best to give
						them food shelter and comfort. We try our best to give them food
						shelter and comfort.
						<br />
						We try our best to give them food shelter and comfort.We try our
						best to give them food shelter and comfort. We try our best to give
						them food shelter and comfort. We try our best to give them food
						shelter and comfort.
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
