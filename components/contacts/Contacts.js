import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
      <div className = {styles.container}>
            <div className = {styles.location}>
                <div>
                    <p><strong>Head office</strong></p>
                    <p>Michael plaza, Canopy - Zimmerman</p>
                </div>
                <div>
                    <p><strong>Workshop</strong></p>
                    <p>Makina market, Kibera drive off ngong road</p>
                </div>
            </div>
            
            <p>P.O Box 57512 - 00200, Nairobi</p>
            <ul className = {styles.links}>
                <li>
                    <span></span>
                    <span>
                        <a href="#">+254720 598 100</a>
                        <a href = "#">+254723 441 681</a>
                    </span>
                </li>
                <li>
                    <span></span>
                    <span>
                        <a href="#">info@matmaxent.co.ke</a>
                        <a href="#">martin@matmaxent.co.ke</a>
                        <a href="#">maxwel@matmaxent.co.ke</a>
                    </span>
                </li>
            </ul>
        </div>
  )
}

export default Contacts