// import React from 'react';
// import styles from './sign.module.css';

// type Props = {};

// const Sign = (props: Props) => {
// 	return (
// 		<div className={styles.clip_path}>
// 			{/* <div>
// 				<div className={styles.wrapper}>
// 					<div className={styles.socialButton}>Sign in with Google</div>
// 					<div className={styles.socialButton}>Sign in with Github</div>
// 					<div className={styles.socialButton}>Sign in with Facebook</div>
// 				</div>
// 			</div> */}
// 			<div className={styles.socialButton}>Sign in with Google</div>
// 			<div className={styles.socialButton}>Sign in with Github</div>
// 			<div className={styles.socialButton}>Sign in with Facebook</div>
// 		</div>
// 	);
// };

// export default Sign;

// 'use client';

// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import styles from './sign.module.css';

// type Props = {};
// const responsive = {
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// };

// const page = (props: Props) => {
// 	return (
// 		<Carousel
// 			additionalTransfrom={0}
// 			arrows={false}
// 			autoPlay={true}
// 			autoPlaySpeed={4000}
// 			centerMode={false}
// 			infinite
// 			responsive={responsive}
// 			itemClass="item"
// 			showDots={true}
// 		>
// 			<div className={styles.clip_path}>
// 				<div className={styles.socialButton}>Sign in with Google</div>
// 				<div className={styles.socialButton}>Sign in with Github</div>
// 				<div className={styles.socialButton}>Sign in with Facebook</div>
// 			</div>
// 		</Carousel>
// 	);
// };

// export default page;
// const Contact = (props: Props) => {
// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.contentContainer}>
// 				<h1 className={styles.title}>Let's Keep in Touch</h1>
// 			</div>
// 			<div className={styles.subContainer}>
// 				<div className={styles.imgContainer}>
// 					<Image src="/contact.jpeg" alt="" fill className={styles.img} />
// 				</div>
// 				<div className={styles.formContainer}>
// 					<form action=" " className={styles.form}>
// 						<input
// 							type="text"
// 							placeholder="Name and Surname"
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Email Address"
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Phone Number (Optional)"
// 							className={styles.input}
// 						/>
// 						<textarea
// 							name=""
// 							id=""
// 							className={styles.textarea}
// 							placeholder="Message"
// 							cols="30"
// 							rows="10"
// 						></textarea>

// 						<Button url="/" text="send" />
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Contact;
