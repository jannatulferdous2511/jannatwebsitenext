import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './postCard.module.css';

type Props = {};

const PostCard = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image
						src="/cat3.jpg"
						alt=""
						fill
						// height={300}
						// width={300}
						className={styles.img}
					/>
				</div>
				<span className={styles.date}> 04.09.2024</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>Title</h1>
				<p className={styles.desc}>
					Its my pleasure to travel with my dog everywhere.Its my pleasure to
					travel with my dog everywhere.Its my pleasure to travel with my dog
					everywhere.Its my pleasure to travel with my dog everywhere.
				</p>
				<span>We love our pets</span>

				<Link className={styles.link} href="/blog/post">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
