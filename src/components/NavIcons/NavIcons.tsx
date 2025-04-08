'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from './navIcons.module.css';

const NavIcons = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const router = useRouter();

	const isLoggedIn = false;

	const handleProfile = () => {
		if (!isLoggedIn) {
			router.push('/login');
		}

		setIsProfileOpen((prev) => !prev);
	};
	return (
		<div className={styles.container}>
			<Image
				src="/profile.png"
				alt=""
				width={22}
				height={22}
				className={styles.image}
				onClick={handleProfile}
			/>
			{isProfileOpen && (
				<div className={styles.profile}>
					<Link href="/" className={styles.link}>
						Profile
					</Link>
					<div className={styles.logout}>Logout</div>
				</div>
			)}

			<Image
				src="/notification.png"
				alt=""
				width={22}
				height={22}
				className={styles.image}
			/>
		</div>
	);
};

export default NavIcons;
