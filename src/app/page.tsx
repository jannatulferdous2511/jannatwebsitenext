'use client';
import Button from '@/components/Button/Button';
import Motion from '@/components/MotionSony/Motion';
import Image from 'next/image';
import Category from './category/page';
import styles from './page.module.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Props = {};
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const home = (props: Props) => {
	return (
		<div className={styles.mainContainer}>
			<Carousel
				additionalTransfrom={0}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={2000}
				centerMode={false}
				infinite
				responsive={responsive}
				itemClass="item"
				showDots={true}
			>
				<div className={styles.container}>
					<h1 className={styles.title}>We Miss You </h1>

					<div className={styles.subContainer}>
						<div className={styles.textContainer}>
							<h1 className={styles.postTitle}>We Miss You very much</h1>
							<p className={styles.postDesc}>
								We Miss You very much We are very sorry we were not there for
								you . We Miss You very much We are very sorry we were not there
								for you .
							</p>
							<Button url="/portfolio" text="See Our Work" />
						</div>

						<div className={styles.imgContainer}>
							<Image
								src="/sony1.jpg"
								alt="JANNATWEBSITE"
								height={400}
								width={400}
								className={styles.sony}
							/>
						</div>
					</div>
				</div>

				<div className={styles.container}>
					<h1 className={styles.title}>We Miss You </h1>
					<div className={styles.subContainer}>
						<div className={styles.textContainer}>
							<h1 className={styles.postTitle}>We Miss You very much</h1>
							<p className={styles.postDesc}>
								We Miss You very much We are very sorry we were not there for
								you . We Miss You very much We are very sorry we were not there
								for you .
							</p>
							<Button url="/portfolio" text="See Our Work" />
						</div>

						<div className={styles.imgContainer}>
							<Image
								src="/sonymahim.jpg"
								alt="JANNATWEBSITE"
								height={400}
								width={400}
								className={styles.sony}
							/>
						</div>
					</div>
				</div>
				<div className={styles.container}>
					<h1 className={styles.title}>We Miss You </h1>
					<div className={styles.subContainer}>
						<div className={styles.textContainer}>
							<h1 className={styles.postTitle}>We Miss You very much</h1>
							<p className={styles.postDesc}>
								We Miss You very much We are very sorry we were not there for
								you . We Miss You very much We are very sorry we were not there
								for you .
							</p>
							<Button url="/portfolio" text="See Our Work" />
						</div>

						<div className={styles.imgContainer}>
							<Image
								src="/sony5.jpg"
								alt="JANNATWEBSITE"
								height={400}
								width={400}
								className={styles.sony}
							/>
						</div>
					</div>
				</div>
			</Carousel>

			<div className={styles.boxes}>
				<div className={styles.box}>
					<h1>10 k+</h1>
					<p>Year of experience</p>
				</div>
				<div className={styles.box}>
					<h1>10 k+</h1>
					<p>Year of experience</p>
				</div>
				<div className={styles.box}>
					<h1>10 k+</h1>
					<p>Year of experience</p>
				</div>
			</div>
			<div className={styles.brands}>
				<Image src="/th.jpg" alt="" fill className={styles.brandImg} />
			</div>
			<div className={styles.brands}>
				<Image src="/brand2.jpg" alt="" fill className={styles.brandImg} />
			</div>

			<Category />
		</div>
	);
};

export default home;
