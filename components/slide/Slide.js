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
					<img src = "/images/sails.jpg" alt = "sails" />
				</div>
				<div className = {styles.content}>
					<h1>Heading 2</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ut eius officiis id consectetur illum, earum esse magni dolores unde omnis aperiam iusto nam accusamus qui ipsam quam distinctio! Cupiditate!
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