import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';
type Props = {
	text: string;
	url: string;
};

function Button({ text, url }: Props) {
	return (
		<Link href={url}>
			<button className={styles.button}>{text}</button>
		</Link>
	);
}

export default Button;
