import React, {useEffect, useRef} from 'react';
import Bars from '../bars/Bars';
import Menu from '../menu/Menu';
import styles from './Header.module.css';
import Link from 'next/link';

function Header(props) {

    useEffect(()=>{
        props.header !== undefined &&
            window.addEventListener("scroll", event => {
                if(props.header.current != null){
                    if(window.scrollY > 5){
                        // props.header.current.style.borderBottomColor = "rgb(210, 210, 210)";
                        //props.header.current.style.backgroundColor = "#ee954df6";
                        //props.header.current.style.borderBottomColor = "#ee954df6";
                        //props.menu_info.current.style.backgroundColor = "#ee954df6";
                        props.header.current.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                        //props.header.current.style.borderBottomColor = "rgba(255, 255, 255, 0.9)";
                        props.menu_info.current.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                    } else {
                        //props.header.current.style.borderBottomColor = "rgba(210, 210, 210, 0)";
                        props.header.current.style.backgroundColor = "transparent";
                        props.menu_info.current.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                    }
                }
            });
    }, [props.header])

    return (
        <header className = {styles.header} ref={props.header}>
            <div>
                <Link href = "/">
                    <div className={styles.logo}>
                        <div className = {styles.imageContainer}>
                            <img src = "/images/matmax_logo.png" alt = "matmax logo" />
                        </div>
                        <h1>Matmax</h1>
                    </div>
                </Link>
                <div className = {styles.menu_bars}>
                    <Bars 
                        handleMenuClick = {data => props.handleMenuClick(data)}
                        barsContainer = {props.barsContainer}
                    />
                </div>
                <div className={styles.menu}>
                    <Menu   
                        link={"/projects"}
                        menu={"Projects"}
                        src = {"/icons/projects.png"}
                        alt = {"projects icon"}
                    />
                    <Menu   
                        link={"/about_us"}
                        menu={"About us"}
                        src = {"/icons/about_us.png"}
                        alt = {"info icon"}
                    />
                    {/* <Menu   
                        link={"/blog"}
                        menu={"Blog"}
                        src = {"/icons/blog.jpg"}
                        alt = {"blog icon"}
                    /> */}
                    <Menu   
                        link={"/contact_us"}
                        menu={"Contact us"}
                        src = {"icons/contact_us.png"}
                        alt = {"phone icon"}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header