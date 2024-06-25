// Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <h1>Скульптуры ул. Б. Покровская</h1>
                <a href="https://t.me/kreal2k" target='_blank'>prod by kreal2k</a>
                <nav>
                    <ul>
                        <li><a href="https://yandex.ru/maps/47/nizhny-novgorod/geo/bolshaya_pokrovskaya_ulitsa/8003255/?ll=43.995227%2C56.318437&z=15.8" target='_blank'>Скульптуры</a></li>
                        <li><a href="https://www.nntu.ru/" target='_blank'>Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
