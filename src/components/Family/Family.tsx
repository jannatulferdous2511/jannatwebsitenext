import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import { BiBall, BiBasket, BiBell } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import styles from './family.module.css';

type Props = {
	title: string;
	image: string;
	date: string;
	reviews: string;
};

const Family = ({ title, image, date, reviews }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.vanila}>
				<Image
					src={image}
					alt={title}
					width={250}
					height={250}
					className={styles.vanilaImg}
				/>
			</div>
			<h1 className={styles.vanilaTitle}>{title}</h1>
			<div className={styles.vanilaStar}>
				<div className={styles.vanilaStarCount}>
					<FaStar className={styles.starIcon} />
					<FaStar className={styles.starIcon} />
					<FaStar className={styles.starIcon} />
					<FaStar className={styles.starIcon} />
					<FaStar className={styles.starIcon} />
				</div>
				<div className={styles.reviews}>({reviews})</div>
			</div>
			<p className={styles.pTag}>
				We miss you We miss you We miss you .We miss you We miss you
			</p>
			<div className={styles.date}>
				<h1 className={styles.vanilaDate}>{date}</h1>
				<Button url="/" text="Home" />
				{/* <button className={styles.biButton}>
						<BiBell className={styles.ball} />
					</button> */}
			</div>
		</div>
	);
};

export default Family;
