import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './mayabiPhoto.module.css';

type Props = {};

const MayabiPhoto = (props: Props) => {
	return (
		<div className={styles.container}>
			<Link href="/mayabi" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/mayabiabbu9.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/mayabiabbu2.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mayabi</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
			<Link href="/mahim" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/babamahimp1.jpg"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/mahimabbu2.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mahim</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
			<Link href="/mayabi" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/mayabiabbublu.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/mayabiabbu12.JPG"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mayabi</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
			<Link href="/mahim" className={styles.imageLink}>
				<div className={styles.img}>
					<Image
						src="/babamahimca5.jpg"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
					<Image
						src="/maimbababeach.jpg"
						alt=""
						fill
						sizes="25vw"
						className={styles.imgStyle}
					/>
				</div>

				<div className={styles.imgHead}>
					<span className={styles.photoName}>Mahim</span>
					<span className={styles.date}>2024</span>
				</div>
			</Link>
		</div>
	);
};

export default MayabiPhoto;

{
	/* <div className={styles.imgMap}>
	{images.map((img) =>
		(<div className={styles.mayabiImages} key={img.id}>
	<Image src={img.url} alt='' height={50} width={50}/>
</div>))}
	
</div> */
}
// /babamahimstore.jpg
// /mayabiabbu8.JPG
// "/mayabiabbu9.JPG"
// "/mayabiabbu4.JPG"
