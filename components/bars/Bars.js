import React, {useEffect, useRef} from 'react';
import styles from './Bars.module.css';

function Bars(props) {

    return (
        <div ref={props.barsContainer} onClick = {event => props.handleMenuClick(event)} className = {styles.menu_bars}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Bars