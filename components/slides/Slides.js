import React from 'react';
import styles from './Slides.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
//import SwiperCore,  { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import SwiperCore, {
    Autoplay,Pagination,Navigation, Scrollbar, A11y, Parallax
  } from 'swiper/core';
import Slide from '../slide/Slide';

SwiperCore.use([Autoplay, Pagination, Navigation, A11y]);

function Slides(props) {

	if(props.data === undefined)
		return null

	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={2}
			slidesPerView={1}
			navigation = {false}
			pagination={{ clickable: true }}
			// scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			//onSlideChange={() => console.log('slide change')}
			autoplay={{
				"delay":6000,
				disableOnInteraction:false,
				waitForTransition:true
			}}
		>
			<SwiperSlide><Slide imageType={"MULTIPLE"} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {0}/> </SwiperSlide>
			<SwiperSlide><Slide imageType={"MULTIPLE"} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {1}/></SwiperSlide>
			<SwiperSlide><Slide imageType={"MULTIPLE"} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {2}/></SwiperSlide>
			<SwiperSlide><Slide imageType={"MULTIPLE"} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {2}/></SwiperSlide>
			<SwiperSlide><Slide imageType={"MULTIPLE"} data = {{images:props.data.images, content:props.data.content, height:props.data.height}} index = {2}/></SwiperSlide>
		</Swiper>
	)
	
}

export default Slides