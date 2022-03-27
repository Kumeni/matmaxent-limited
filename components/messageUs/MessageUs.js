import React from 'react';
import styles from './MessageUs.module.css';

function MessageUs() {
	return (
		<form className = {styles.form}>
			<div>
				<label htmlFor = "email">Email*</label>
				<input type="email" name="email" id="email" />
			</div>
			<div>
				<label htmlFor = "title">Title*</label>
				<input type="title" name="title" id = "title" />
			</div>
			<div>
				<label htmlFor="message">Message*</label>
				<textarea name="message" id="message"></textarea>
			</div>
			<input type="submit" />
		</form>
	)
}

export default MessageUs