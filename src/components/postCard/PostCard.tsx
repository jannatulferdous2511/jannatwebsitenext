import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './postCard.module.css';

type Props = {};

const PostCard = ({ post }: any) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{post.img && (
					<div className={styles.imgContainer}>
						<Image
							src={post.img}
							alt=""
							fill
							// height={400}
							// width={300}
							className={styles.img}
						/>
					</div>
				)}
				<span className={styles.date}>
					{post.createdAt?.toString().slice(4, 16)}
				</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.desc}>{post.desc}</p>

				<Link
					className={styles.link}
					href={`/ourFamily/${post.slug}`}
					key={post.id}
				>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
