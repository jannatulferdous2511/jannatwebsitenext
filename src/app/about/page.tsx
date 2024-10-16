'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Button from '@/components/Button/Button';
import Family from '@/components/Family/Family';
import Image from 'next/image';
import styles from './page.module.css';

type Props = {};
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1324 },
		items: 4,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1324, min: 764 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 764, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

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

			{/* <div className={styles.textContainer}>
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
			</div> */}

			<div className={styles.familyContainer}>
				<h1 className={styles.familyTitle}>Our Memorable Pictures</h1>
				<div className={styles.carousel}>
					<Carousel
						additionalTransfrom={0}
						arrows={false}
						autoPlay={true}
						autoPlaySpeed={4000}
						centerMode={false}
						infinite
						responsive={responsive}
						itemClass="item"
						showDots={true}
					>
						<Family
							title="Vanila"
							image="/vanila.jpg"
							reviews="6"
							date="30.9.2024"
						/>
						<Family
							title="BlackyVanila"
							image="/blackyvanila.jpg"
							reviews="6"
							date="30.9.2024"
						/>
						<Family
							title="Sugary"
							image="/sugary1.jpg"
							reviews="6"
							date="30.9.2024"
						/>
						<Family
							title="Blacky2"
							image="/blacky2.jpg"
							reviews="6"
							date="25.5.2024"
						/>
						<Family
							title="Sony"
							image="/sony7.jpg"
							reviews="6"
							date="25.5.2024"
						/>
						<Family
							title="Sony"
							image="/sonyamimahim.jpg"
							reviews="6"
							date="25.5.2024"
						/>
						<Family
							title="Sony"
							image="/sonymahim3.jpg"
							reviews="6"
							date="25.5.2024"
						/>
						<Family
							title="Mummum"
							image="/mummum2.jpg"
							reviews="6"
							date="25.5.2024"
						/>
						<Family
							title="Sony"
							image="/sonyamra2.jpg"
							reviews="6"
							date="25.5.2024"
						/>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
