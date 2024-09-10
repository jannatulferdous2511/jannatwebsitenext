import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

type Props = {};

const BlogPost = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>Our top priority</h1>
					<p className={styles.desc}>
						Our top priority is take care of our dogs. Our top priority is take
						care of our dogs.Our top priority is take care of our dogs. Our top
						priority is take care of our dogs.Our top priority is take care of
						our dogs. Our top priority is take care of our dogs.Our top priority
						is take care of our dogs. Our top priority is take care of our dogs.
					</p>

					<div className={styles.author}>
						<Image
							src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt=""
							height={40}
							width={40}
							className={styles.avatar}
						/>
						<span className={styles.userName}>Lora David</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src="https://images.pexels.com/photos/313979/pexels-photo-313979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						fill
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>
					Our top priority is take care of our dogs. Our top priority is take
					care of our dogs.Our top priority is take care of our dogs. Our top
					priority is take care of our dogs.Our top priority is take care of our
					dogs. Our top priority is take care of our dogs.Our top priority is
					take care of our dogs. Our top priority is take care of our dogs.
				</p>
			</div>

			<div className={styles.singleContainer}>
				<div className={styles.imgContainer}>
					<Image src="/cat4.jpg" alt="" fill className={styles.cat} />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.head}>Our top priority</h1>
					<div className={styles.avatarDesc}>
						<div className={styles.detail}>
							<Image
								src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt=""
								height={50}
								width={50}
								className={styles.avatar2}
							/>
							<div className={styles.detailText}>
								<span className={styles.detailTitle}>Author</span>
								<span className={styles.detailValue}>Terry Jeffferson</span>
							</div>
							<div className={styles.detailText}>
								<span className={styles.detailTitle}>Published</span>
								<span className={styles.detailValue}>04.09.2024</span>
							</div>
						</div>

						<div className={styles.detailContent}>
							<p className={styles.text}>
								Our top priority is take care of our cats. Our top priority is
								take care of our cats.Our top priority is take care of our dogs.
								Our top priority is take care of our dogs.Our top priority is
								take care of our cats. Our top priority is take care of our
								dogs.Our top priority is take care of our dogs. Our top priority
								is take care of our cats.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
