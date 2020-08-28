import React from 'react';
import styles from '../css/Footer.module.css';

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div id={styles.note}>This application was created for job application purposes!</div>
            <div id={styles.contact}>Contact: petarcorluka86@gmail.com</div>
        </div>
    );
}