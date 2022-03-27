import React from 'react';
import styles from './Footer.module.css';

function Footer(props) {
	return (
		<div ref = {props.footer} className = {styles.container}>
			<div>
				<p>Follow us on socials</p>
				<div className = {styles.socials}>
					<div className = {styles.social}>
						<img src = "" alt = "" />
					</div>
					<div className = {styles.social}>
						<img src = "" alt = "" />
					</div>
					<div className = {styles.social}>
						<img src = "" alt = "" />
					</div>
					<div className = {styles.social}>
						<img src = "" alt = "" />
					</div>
				</div>
			</div>
			<div className = {styles.navigation}>
				<div>
					<h2>Quick links</h2>
					<a href = "#">Done projects</a>
					<a href = "#">Contact us</a>
					<a href = "#">About us</a>
				</div>
				<div>
					<h2>Our services</h2>
					<a href = "#">Car shades</a>
					<a href = "#">Car shades</a>
					<a href = "#">Car shades</a>
				</div>
				{/* <div>
					<h2>Contact</h2>
					<a href = "#"><i class></i>Makina market, off-ngong road</a>
					<a href = "#">info@matmax.co.ke</a>
					<a href = "#">+254717551542</a>
				</div> */}
			</div>
			<p>
				Copyright &copy; 2022 Matmax limited
			</p>
		</div>
	)
}

export default Footer;