import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

function Menu(props) {
  return (
	<div className = {styles.container}>
		<Link href={props.link}>
			<a className={styles.menu}>
				<img src = {props.src} alt = {props.alt} />
				{props.menu}
			</a>
		</Link>
	</div>
  )
}

export default Menu