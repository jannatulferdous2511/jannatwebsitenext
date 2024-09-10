import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

type Props = {};

const Category = ({ params }: any) => {
	console.log(params);
	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>

			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Creative Work</h1>
					<p className={styles.desc}>
						We love our WorkWe love our Work.We love our Work for kitty.We love
						our Work for kitty.We love our Work for kitty.We love our Work for
						kitty.
					</p>
					{/* <Button text="See Our Works" url="#" /> */}
					<Button url="/about" text="See Our Work" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						src="https://images.pexels.com/photos/6864673/pexels-photo-6864673.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill={true}
					/>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Creative Work</h1>
					<p className={styles.desc}>
						We love our Work.We love our Work for kitty.We love our Work for
						kitty.We love our Work for kitty.We love our Work for kitty.
					</p>
					<Button text="See Our Works" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						src="https://images.pexels.com/photos/6869655/pexels-photo-6869655.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill={true}
					/>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Creative Work</h1>
					<p className={styles.desc}>
						We love our Work for kitty.We love our Work for kitty.We love our
						Work for kitty.We love our Work for kitty.
					</p>

					<Button text="See Our Works" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						src="https://images.pexels.com/photos/22221809/pexels-photo-22221809/free-photo-of-close-up-of-a-kitten-sticking-out-its-tongue.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						fill={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
