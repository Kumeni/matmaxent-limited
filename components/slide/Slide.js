import React, {useRef, useEffect} from 'react';
import styles from './Slide.module.css';

function Slide(props) {

	const slide = useRef(null);
	console.log(props.imageType);
	useEffect(()=>{
		if(slide.current !== null && props.data.height){
			slide.current.style.height = props.data.height;
		}
	}, [props.data.height])

	if(props.data.images !== undefined /*&& props.data.images.length > 0*/ && props.data.content !== undefined)
		return (
			<div ref = {slide} className = {styles.slide}>
				<div className = {styles.imageContainer}>
					<img src = "/images/landing_image1.png" alt = "sails" />
				</div>
				<div className = {styles.content}>
					<h1>Your artificial shade provider</h1>
					<p>
						At Matmaxent we design, engineer, install and maintain car shades, garden umbrellas, canopies to protect
						you or your customers from the sun's glare or rainfall while you're enjoying the environment.
					</p>
					<a href = "#">Link</a>
				</div>
			</div>
		)
	else if (props.data.content === undefined && props.data.images !== undefined){
		if(props.imageType == "MULTIPLE")
			return (
				<div className = {styles.multipleImage}>
					<img src = "/images/matmax_logo.png" alt = "matmax logo" />
				</div>
			)
		else 
			return (
				<div className = {styles.singleImage}>
					<img src = "/images/matmax_logo.png" alt = "matmax logo" />
				</div>
			)
	} else 
		return null;
}

export default Slide