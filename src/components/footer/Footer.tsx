import Image from 'next/image';
import React from 'react';
import styles from './footer.module.css';

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>2024.All Rights Reserved.</div>
			<div className={styles.social}>
				<Image
					src="/facebook.png"
					alt="JANNATWEBSITE"
					height={25}
					width={25}
					className={styles.icon}
				/>

				<Image
					src="/instagram.jpg"
					alt="JANNATWEBSITE"
					height={25}
					width={25}
					className={styles.icon}
				/>

				<Image
					src="/youtube.png"
					alt="JANNATWEBSITE"
					height={25}
					width={25}
					className={styles.icon}
				/>
			</div>
		</div>
	);
};

export default Footer;
