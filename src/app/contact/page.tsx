'use client';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

type Props = {};

const Contact = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.contentContainer}>
				<h1 className={styles.title}>Let's Keep in Touch</h1>
			</div>
			<div className={styles.subContainer}>
				<div className={styles.imgContainer}>
					<Image src="/contact.jpeg" alt="" fill className={styles.img} />
				</div>
				<div className={styles.formContainer}>
					<form action=" " className={styles.form}>
						<input
							type="text"
							placeholder="Name and Surname"
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Email Address"
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Phone Number (Optional)"
							className={styles.input}
						/>
						<textarea
							name=""
							id=""
							className={styles.textarea}
							placeholder="Message"
							cols="30"
							rows="10"
						></textarea>

						<Button url="#" text="send" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
