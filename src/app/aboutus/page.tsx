import type { Metadata } from 'next';

import 'react-multi-carousel/lib/styles.css';

// import Button from '@/components/Button/Button';
// import Family from '@/components/Family/Family';
// import MayabiPhoto from '@/components/MayabiPhoto/MayabiPhoto';
import Mummum from '@/components/Mummum/Mummum';
import PetFamily from '@/components/PetFamily/PetFamily';
import Slider from '@/components/Slider/Slider';
import Sony from '@/components/Sony/sony';
import Image from 'next/image';
import styles from './page.module.css';

const metadata: Metadata = {
	title: 'About Page',
	description: ' Create next app',
};

type Props = {};
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1324 },
		items: 4,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1324, min: 764 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 764, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const AboutPage = () => {
	return (
		<div className={styles.container}>
			<Slider />
			<PetFamily />
			<Mummum />
			<Sony />
		</div>
	);
};

export default AboutPage;
