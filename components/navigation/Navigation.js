import React, { useEffect } from 'react';
import styles from './Navigation.module.css';
import {useRouter} from 'next/router';

function Navigation(props) {

    const router = useRouter();

    return (
        <div ref={props.menu_info} className = {styles.container}>
            {
                router !== undefined && router.pathname !== "/" &&
                    <ul>
                        <a href = "#">Homepage</a>
                    </ul>
            }
            <ul className = {styles.ourServices}>
                <li>Our services</li>
                <a href = "#">Service1</a>
                <a href = "#">Service2</a>
                <a href = "#">Service3</a>
                <a href = "#">Service4</a>
                <a href = "#">Service5</a>
            </ul>
            <ul>
                <a href = "#">Projects</a>
                <a href = "#">About us</a>
                <a href = "#">Contact us</a>
            </ul>
        </div>
    )
}

export default Navigation