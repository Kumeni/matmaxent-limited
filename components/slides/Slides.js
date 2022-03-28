import React, { useEffect, useState } from 'react';
import styles from './Slides.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
//import SwiperCore,  { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import SwiperCore, {
    Autoplay,Pagination,Navigation, Scrollbar, A11y, Parallax
  } from 'swiper/core';
import Slide from '../slide/Slide';

SwiperCore.use([Autoplay, Pagination, Navigation, A11y]);

function Slides(props) {

	console.log(props.imageType);
	const [slidesPerView, setSlidesPerView] = useState(1);

	//This function is responsible for determining the number of slides based on window size
	const numberOfSlides = () => {
		if(props.imageType === "MULTIPLE")
			if(window.innerWidth > 1088){
				slidesPerView !== 3 &&
					setSlidesPerView(3);
			} else if( window.innerWidth > 580 ){
				slidesPerView !== 3 &&
					setSlidesPerView(2);
			} else {
				slidesPerView !== 3 &&
					setSlidesPerView(1)
			}
		else {
			setSlidesPerView(1);
		}
	}
	useEffect(()=>{
		numberOfSlides();
	}, [])

	useEffect(()=>{
		if(props.imageType === "MULTIPLE"){
			window.addEventListener( "resize", event => {
				numberOfSlides();
			});
		}
	}, [props.imageType])

	if(props.data === undefined)
		return null

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={2}
			slidesPerView={slidesPerView}
			navigation = {false}
			pagination={{ clickable: true }}
			// scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			//onSlideChange={() => console.log('slide change')}
			autoplay={{
				"delay":10000,
				disableOnInteraction:false,
				waitForTransition:true
			}}
		>
			<SwiperSlide><Slide imageType={props.imageType} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {0}/> </SwiperSlide>
			<SwiperSlide><Slide imageType={props.imageType} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {1}/></SwiperSlide>
			<SwiperSlide><Slide imageType={props.imageType} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {2}/></SwiperSlide>
			<SwiperSlide><Slide imageType={props.imageType} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {2}/></SwiperSlide>
			<SwiperSlide><Slide imageType={props.imageType} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {2}/></SwiperSlide>
		</Swiper>
	)
	
}

export default Slides