import React from 'react';

import Image from 'next/image';
import Link from 'next/link.js';
import { notFound } from 'next/navigation.js';
import { items } from './data.ts';
import styles from './page.module.css';

type Props = {};

// const getData = (item) => {
// 	const data = items[item];

// 	if (data) {
// 		return data;
// 	}
// 	return notFound();
// };

const Sibling = () => {
	// 	const data = getData(params.sibling);

	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<h1 className={styles.title}>We are Brother and Sister</h1>
			</div>
			<div className={styles.map}>
				{items.map((item) => (
					<div className={styles.items} key={item.id}>
						<div className={styles.imgContainer}>
							<Image height={450} width={350} alt="" src={item.image} />
						</div>
						<div className={styles.content}>
							<h2>{item.title}</h2>
							<p className={styles.desc}>{item.desc}</p>
							<h4 className={styles.date}>{item.date}</h4>
						</div>
					</div>
				))}
			</div>
			{/* <div className={styles.heading}>
				<h1 className={styles.title}>We are Brother and Sister</h1>
			</div>
			<div className={styles.map}>
				{items.map((item) => (
					<div className={styles.items} key={item.id}>
						<div className={styles.imgContainer}>
							<Image height={450} width={350} alt="" src={item.image} />
						</div>
						<div className={styles.content}>
							<h2>{item.title}</h2>
							<p className={styles.desc}>{item.desc}</p>
							<h4 className={styles.date}>{item.date}</h4>
						</div>
					</div>
				))} 
			</div> */}
		</div>
	);
};

export default Sibling;

// export const items = {
// 	Sibling: [
// 		{
// 			id: 1,
// 			title: 'Blue',
// 			desc: 'get together for birthday party',
// 			image: '/bhaibon1.JPG',
// 			date: '5.6.2022',
// 		},
// 		{
// 			id: 2,
// 			title: 'Blue',
// 			desc: 'get together for birthday party',
// 			image: '/bhaibon2.JPG',
// 			date: '5.6.2022',
// 		},
// 		{
// 			id: 3,
// 			title: 'Blue',
// 			desc: 'get together for birthday party',
// 			image: '/bhaibon3.JPG',
// 			date: '5.6.2022',
// 		},
// 	],
// };
