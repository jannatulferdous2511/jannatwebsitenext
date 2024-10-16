'use client';

import Button from '@/components/Button/Button';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';
import { items } from './data.ts';
import styles from './page.module.css';

type Props = {};
const getData = (cat) => {
	const data = items[cat];

	if (data) {
		return data;
	}
	return notFound();
};

const Category = ({ params }: any) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease',
			once: true,
			anchorPlacement: 'top-bottom',
		});
	}, []);

	const data = getData(params.category);
	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h1 data-aos="fade-left" className={styles.title}>
							{item.title}
						</h1>
						<p
							data-aos="fade-right"
							data-aos-delay="200"
							className={styles.desc}
						>
							{item.desc}
						</p>
						{/* <Button text="See Our Works" url="#" /> */}
						<Button
							data-aos="zoom-in"
							data-aos-delay="400"
							url="/about"
							text="See Our Work"
						/>
					</div>
					<div
						data-aos="fade-left"
						data-aos-delay="500"
						className={styles.imgContainer}
					>
						<Image fill={true} alt="" src={item.image} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;

//  https://images.pexels.com/photos/6864673/pexels-photo-6864673.jpeg?auto=compress&cs=tinysrgb&w=600"
//  https://images.pexels.com/photos/6869655/pexels-photo-6869655.jpeg?auto=compress&cs=tinysrgb&w=600
//  https://images.pexels.com/photos/22221809/pexels-photo-22221809/free-photo-of-close-up-of-a-kitten-sticking-out-its-tongue.jpeg?auto=compress&cs=tinysrgb&w=600"

{
	/* <div className={styles.item}>
				<div className={styles.content}>
					<h1 data-aos="fade-right" className={styles.title}>
						Creative Work
					</h1>
					<p data-aos="fade-left" data-aos-delay="200" className={styles.desc}>
						We love our Work.We love our Work for kitty.We love our Work for
						kitty.We love our Work for kitty.We love our Work for kitty.
					</p>
					<Button
						data-aos="zoom-in"
						data-aos-delay="400"
						text="See Our Works"
						url="#"
					/>
				</div>
				<div
					data-aos="fade-right"
					data-aos-delay="500"
					className={styles.imgContainer}
				>
					<Image src="/mayabi3.jpg" alt="" fill={true} />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 data-aos="fade-left" className={styles.title}>
						Creative Work
					</h1>
					<p data-aos="fade-right" data-aos-delay="200" className={styles.desc}>
						We love our Work for kitty.We love our Work for kitty.We love our
						Work for kitty.We love our Work for kitty.
					</p>

					<Button text="See Our Works" url="#" />
				</div>
				<div
					data-aos="fade-left"
					data-aos-delay="600"
					className={styles.imgContainer}
				>
					<Image src="/mayabi5.jpg" alt="" fill={true} />
				</div>
			</div> */
}
