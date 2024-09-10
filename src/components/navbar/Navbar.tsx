import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import NavLinks from './links/navLinks/Links';
import styles from './navbar.module.css';

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/ ">JANNATWEBSITE</Link>
			</div>

			{/* //  <DarkModeToggle /> */}
			<div className={styles.navLinks}>
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
