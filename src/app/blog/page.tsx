import Button from '@/components/Button/Button';
import PostCard from '@/components/postCard/PostCard';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './page.module.css';
type Props = {};

const blog = (props: Props) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.container}>
				<Link href="/blog/testId" className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="https://images.pexels.com/photos/2896297/pexels-photo-2896297.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							height={350}
							width={400}
							className={styles.img}
						/>
						{/* <Button url="/portfolio" text="See Our Work" /> */}
					</div>

					<div className={styles.content}>
						<h1 className={styles.title}>Traveling with Scooty</h1>
						<p className={styles.desc}>
							Its my pleasure to travel with my dog everywhere.Its my pleasure
							to travel with my dog everywhere.Its my pleasure to travel with my
							dog everywhere.Its my pleasure to travel with my dog everywhere
						</p>
					</div>
				</Link>
			</div>
			<div className={styles.container}>
				<Link href="/blog/testId" className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							height={250}
							width={400}
							className={styles.img}
						/>
					</div>

					<div className={styles.content}>
						<h1 className={styles.title}>Traveling with Sony</h1>
						<p className={styles.desc}>
							Its my pleasure to travel with my dog everywhere.Its my pleasure
							to travel with my dog everywhere.Its my pleasure to travel with my
							dog everywhere.Its my pleasure to travel with my dog everywhere
						</p>
					</div>
				</Link>
			</div>
			<div className={styles.container}>
				<Link href="/blog/testId" className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="https://images.pexels.com/photos/573256/pexels-photo-573256.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							height={250}
							width={400}
							className={styles.img}
						/>
					</div>

					<div className={styles.content}>
						<h1 className={styles.title}>Traveling with Diana</h1>
						<p className={styles.desc}>
							Its my pleasure to travel with my dog everywhere.Its my pleasure
							to travel with my dog everywhere.Its my pleasure to travel with my
							dog everywhere.Its my pleasure to travel with my dog everywhere
						</p>
					</div>
				</Link>
			</div>
			<div className={styles.blogContainer}>
				<div className={styles.post}>
					<PostCard />
				</div>
				<div className={styles.post}>
					<PostCard />
				</div>
				<div className={styles.post}>
					<PostCard />
				</div>
				<div className={styles.post}>
					<PostCard />
				</div>
			</div>
		</div>
	);
};

export default blog;
