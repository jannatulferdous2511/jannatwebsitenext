import { getUser } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import styles from './postUser.module.css';

type Props = {};

const PostUser = async ({ userId }: any) => {
	const user = await getUser(userId);
	return (
		<div className={styles.container}>
			{/* <Image
				src={user.img ? user.img : '/th.jpg.png'}
				alt=""
				height={50}
				width={50}
				className={styles.avatar2}
			/> */}

			<span className={styles.title}>Author</span>
			<span className={styles.username}>{user.username}</span>
		</div>
	);
};

export default PostUser;
