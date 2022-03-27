import React from 'react';
import styles from './Service.module.css';
import Link from 'next/link';
import Slides from '../slides/Slides';

function Service(props) {
	return (
		<div className = {(props.index%2 == 0? styles.serviceEven : styles.serviceOdd)}>
			<div className = {styles.content}>
				<h2>{props.index+1}. {props.title}</h2>
				<div className = {styles.imagesS}>
					<Slides data = {{images:[]}} />
				</div>
				<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut eius officiis id consectetur illum, earum esse magni dolores unde omnis aperiam iusto nam accusamus qui ipsam quam distinctio! Cupiditate!
				</p>
				<Link href = "#">
					Link
				</Link>
			</div>
			<div className = {styles.imagesF}>
				<Slides imageType={"SINGLE"} data = {{images:[]}} />
			</div>
		</div>
	)
}

export default Service