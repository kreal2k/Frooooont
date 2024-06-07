// Header.js
import React from 'react';
import styles from './Header.module.css';

import blurryBackground from './images/nn2.jpg';

function Header() {
    const handleScrollDown = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    };

    return (
        <header className={styles.header} style={{backgroundImage: `url(${blurryBackground})`}}>
            <h1>Информационный ресурс "Скульптуры ул. Б. Покровская"</h1>
            <p className={styles.additionalText}>Пройдите виртуальную экскурию по улице Большая Покровская в Нижнем Новгороде, где вас ожидают удивительные скульптуры, каждая со своей уникальной историей и красотой. Погрузитесь в мир искусства и откройте новые грани культурного наследия, наслаждаясь каждым произведением виртуально.</p>
            <a href="#main-content" className={styles["scroll-down"]} onClick={handleScrollDown}>
                &#8964;
            </a>
        </header>
    );
}

export default Header;
