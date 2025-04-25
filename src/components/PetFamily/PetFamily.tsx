'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Family from '../Family/Family';
import styles from './petFamily.module.css';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1324 },
		items: 4,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1324, min: 764 },
		items: 3,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 764, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const PetFamily = () => {
	return (
		<div className={styles.container}>
			<div className={styles.familyContainer}>
				<h1 className={styles.familyTitle}>Our Memorable Pictures</h1>

				<div className={styles.carousel}>
					<Carousel
						additionalTransfrom={0}
						arrows={false}
						autoPlay={true}
						autoPlaySpeed={2500}
						centerMode={false}
						infinite
						responsive={responsive}
						itemClass="item"
						showDots={true}
					>
						<div className={styles.family}>
							<Family
								title="Vanila"
								image="/vanila.jpg"
								reviews="6"
								date="30.9.2024"
							/>
						</div>
						<div className={styles.family}>
							<Family
								title="Sugary"
								image="/sugary1.jpg"
								reviews="6"
								date="30.9.2024"
							/>
						</div>
						<div className={styles.family}>
							<Family
								title="Blacky2"
								image="/blacky2.jpg"
								reviews="6"
								date="25.5.2024"
							/>
						</div>

						<div className={styles.family}>
							<Family
								title="Sony"
								image="/sony7.jpg"
								reviews="6"
								date="25.5.2024"
							/>
						</div>
						<div className={styles.family}>
							<Family
								title="Sony"
								image="/sonyamimahim.jpg"
								reviews="6"
								date="25.5.2024"
							/>
						</div>

						<div className={styles.family}>
							<Family
								title="Sony"
								image="/sonymahim3.jpg"
								reviews="6"
								date="25.5.2024"
							/>
						</div>
						<div className={styles.family}>
							<Family
								title="Mummum"
								image="/mummum36.JPG"
								reviews="6"
								date="25.5.2024"
							/>
						</div>
						<div className={styles.family}>
							<Family
								title="Mummum"
								image="/mummumsofa1.JPG"
								reviews="6"
								date="25.5.2024"
							/>
						</div>

						<div className={styles.family}>
							<Family
								title="Mummum"
								image="/vanilafm.jpg"
								reviews="6"
								date="25.5.2024"
							/>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default PetFamily;
