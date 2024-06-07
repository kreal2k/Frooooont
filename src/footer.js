// Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <h1>Скульптуры ул. Б. Покровская</h1>
                <p>prod by kreal2k</p>
                <nav>
                    <ul>
                        <li><a href="#about">О проекте</a></li>
                        <li><a href="#sculptures">Скульптуры</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
