'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './button.module.css';
type Props = {
	text: string;
	url: string;
};

function Button({ text, url }: Props) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease',
			once: true,
			anchorPlacement: 'top-bottom',
		});
	}, []);
	return (
		<Link href={url}>
			<button data-aos="zoom-in" data-aos-delay="400" className={styles.button}>
				{text}
			</button>
		</Link>
	);
}

export default Button;
