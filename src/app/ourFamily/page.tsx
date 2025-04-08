import type { Metadata } from 'next';

import Picture from '@/components/familyPicture/Picture';
import Image from 'next/image';
import Link from 'next/link';
import { items } from './data';
import styles from './page.module.css';

type Props = {};
const OurFamily = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>Our Family</h1>
			</div>

			<div className={styles.picture}>
				{items.map((item) => (
					<div className={styles.map} key={item.id}>
						<div className={styles.top}>
							<div className={styles.imgContainer}>
								<Image
									className={styles.img}
									alt=""
									src={item.img}
									fill={true}
								/>
							</div>
							{/* <span className={styles.date}>{item.date}</span> */}
						</div>

						{/* <div className={styles.bottom}>
							<p className={styles.desc}>{item.desc}</p>
							<Link className={styles.link} href="/ourFamily/PicPostPage">
								{item.link}
							</Link>
						</div> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default OurFamily;
