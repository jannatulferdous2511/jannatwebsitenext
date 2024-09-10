import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.subContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>We Miss You very much</h1>
					<p className={styles.desc}>
						We are very sorry we were not there for you .
					</p>
					<Button url="/portfolio" text="See Our Work" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						src="/sony.jpg"
						alt="JANNATWEBSITE"
						height={400}
						width={400}
						className={styles.sony}
					/>
				</div>
			</div>
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
			{/* <Image
				src="https://images.pexels.com/photos/736532/pexels-photo-736532.jpeg?auto=compress&cs=tinysrgb&w=600"
				alt=""
				width={300}
				height={300}
				className={styles.img}
			/> */}
		</div>
	);
}
