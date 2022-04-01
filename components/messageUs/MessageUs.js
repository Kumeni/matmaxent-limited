import React from 'react';
import styles from './MessageUs.module.css';

function MessageUs() {
	return (
		<form className = {styles.form}>
			<div>
				<label htmlFor = "email">Email<span className={styles.required}>*</span></label>
				<input type="email" name="email" id="email" />
			</div>
			<div>
				<label htmlFor = "title">Title<span className={styles.required}>*</span></label>
				<input type="title" name="title" id = "title" />
			</div>
			<div>
				<label htmlFor="message">Message<span className={styles.required}>*</span></label>
				<textarea name="message" id="message"></textarea>
			</div>
			<input type="submit" />
		</form>
	)
}

export default MessageUs