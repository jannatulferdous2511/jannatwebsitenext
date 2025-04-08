'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './searchBar.module.css';

const SearchBar = () => {
	const router = useRouter();
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get('name') as string;

		if (name) {
			router.push(`/list?name=${name}`);
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSearch}>
			<input
				type="text"
				name="name"
				placeholder="Search"
				className={styles.input}
			/>
			<button className={styles.button}>
				<Image src="/search.png" alt="" width={20} height={20} />
			</button>
		</form>
	);
};

export default SearchBar;
