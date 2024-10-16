import React, { Children, useEffect } from 'react';
import styles from './page.module.css';

const Layout = ({ children }: any) => {
	return (
		<div>
			<h1 className={styles.mainTitle}>Our Memories</h1>
			{children}
		</div>
	);
};

export default Layout;
