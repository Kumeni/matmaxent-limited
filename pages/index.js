import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/Header';
import Service from '../components/service/Service';
import Slides from '../components/slides/Slides';
import Advantage from '../components/advantage/Advantage';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer/Footer';
import React, {useRef, useEffect, useState} from 'react';
import Navigation from '../components/navigation/Navigation';

export default function Home(props) {

	const landing = useRef(null);
	const header = useRef(null);

	const [height, setHeight] = useState();

	const handleLandingHeight = () => {
		if(landing.current !== null && header.current !== null){
			let windowHeight = window.innerHeight, headerHeight = header.current.getBoundingClientRect().height;
			console.log((windowHeight - headerHeight)+1 + "px");
			landing.current.style.height = (windowHeight - headerHeight)+1 + "px";
			setHeight((windowHeight - headerHeight)+1 + "px");
		}
	}

	useEffect(()=>{
		if(landing.current !== null && header.current !== null){
			handleLandingHeight();
			
			document.addEventListener( "load", event => {
				handleLandingHeight();
			})
			window.addEventListener( "resize", event => {
				handleLandingHeight();
			})
		}
	}, [landing, header])

	return (
		<div className={styles.container}>
			<Head>
				<title>Maxmat Limited</title>
				<meta name="description" content="Generated by create next app" />
				<meta name = "theme-color" content = "white" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header menu_info = {props.menu_info} header = {header} barsContainer = {props.barsContainer} handleMenuClick = {data => props.handleMenuClick(data)}/>
			<main ref = {props.main} className={styles.main}>

				<Navigation menu_info = {props.menu_info}/>

				<section ref = {landing} className={styles.landing}>
					<Slides data = {{images:[], content:{}, height:height}}/>
				</section>
				<section className = {styles.introduction}>
					<h2>
						We install shades that not only provide protection from harsh weather and Ultra violent
						rays but are also visually appealing.
					</h2>
					<p>We archieve this through:</p>
					<ul>
						<a href="#">Car shades</a>
						<a href="#">Garden Umbrellas</a>
						<a href="#">Tents</a>
						<a href="#">Canopies</a>
					</ul>
				</section>
				<section className = {styles.ourServices}>
					<h1>Our services</h1>
					<div>
						<Service 
							index = {0} 
							title="Car shades" 
							intro=""
							link=""
						/>
						<Service 
							index = {1}
							title = "Garden umbrellas"
							intro = ""
							link = ""
						/>
						<Service 
							index = {2}
							title = "Tents"
							intro = ""
							link = ""
						/>
						<Service 
							index = {3}
							title = "Canopies"
							intro = ""
							link = ""
						/>
					</div>
				</section>
				<section className = {styles.whyUs}>
					<h1>Why us?</h1>
					<div>
						<Advantage />
						<Advantage />
						<Advantage />
						<Advantage />
						<Advantage />
						<Advantage />
					</div>
				</section>
			</main>
			<Footer footer = {props.footer}/>
		</div>
	)
}
