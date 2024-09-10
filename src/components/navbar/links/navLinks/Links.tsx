'use client';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Session } from 'node:inspector';
import React, { useState } from 'react';
import styles from './links.module.css';
import NavLinks from './NavLinks';

type Props = {};
const links = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'Portfolio',
		path: '/portfolio',
	},
	{
		id: 3,
		title: 'Blog',
		path: '/blog',
	},
	{
		id: 4,
		title: 'About',
		path: '/about',
	},
	{
		id: 5,
		title: 'Contact',
		path: '/contact',
	},
	{
		id: 6,
		title: 'Dashboard',
		path: '/dashboard',
	},
];

const Links = (props: Props) => {
	const [open, setOpen] = useState(false);

	//TEMPORARY

	const session = true;
	const isAdmin = true;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLinks item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && <NavLinks item={{ title: 'Admin', path: '/admin' }} />}

						<button className={styles.logout}>Logout</button>
					</>
				) : (
					<NavLinks item={{ title: 'Login', path: '/login' }} />
				)}
			</div>

			<Image
				src="/menu2.jpg"
				alt=" "
				width={30}
				height={30}
				onClick={() => setOpen((prev) => !prev)}
				className={styles.menuButton}
			/>

			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLinks item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
