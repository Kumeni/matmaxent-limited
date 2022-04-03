import React, { useEffect } from 'react';
import styles from './Navigation.module.css';
import {useRouter} from 'next/router';
import Link from "next/link";

function Navigation(props) {

    const router = useRouter();

    return (
        <div ref={props.menu_info} className = {styles.container}>
            {
                router !== undefined && router.pathname !== "/" &&
                    <ul>
                        <Link href="/">
                            <a>Homepage</a>
                        </Link>
                    </ul>
            }
            <ul className = {styles.ourServices}>
                <li>Our services</li>
                <Link href="/services/service-name">
                    <a>Service1</a>
                </Link>
                <Link href="/services/service-name">
                    <a>Service2</a>
                </Link>
                <Link href="/services/service-name">
                    <a>Service3</a>
                </Link>
                <Link href="/services/service-name">
                    <a>Service4</a>
                </Link>
                <Link href="/services/service-name">
                    <a>Service5</a>
                </Link>
            </ul>
            <ul>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Link href="/about_us">
                    <a>About us</a>
                </Link>
                <Link href="/contact_us">
                    <a>Contact us</a>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation