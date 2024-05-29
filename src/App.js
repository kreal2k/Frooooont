import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './App.module.css';

import evstig from './images/evstig.jpg';
import goat from './images/goat.jpg';
import gorod from './images/gorod.jpg';
import pocht from './images/pocht.jpg';
import polovoy from './images/polovoy.jpg';
import reader from './images/reader.jpg';
import seller from './images/seller.jpg';
import skripach from './images/skripach.jpg';
import traktir from './images/traktir.jpg';

function MyApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalLink, setModalLink] = useState(''); // Добавляем состояние для ссылки
  const [showContent, setShowContent] = useState(false);

  // Остальной ваш код
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: '#222',
      overflow: 'auto',
      borderRadius: '8px',
      outline: 'none',
      color: '#fff'
    }
  };

  const openModal = (image, description, link) => {
    setModalImage(image);
    setModalDescription(description);
    setModalLink(link); // Устанавливаем переданную ссылку
    setModalIsOpen(true);
    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.title}> Экскурсия по Объектам культурного наследия г. Нижнего Новгорода</h1>
      <button onClick={() => openModal(evstig, 'Описание для изображения 1', './Clouds/evstig.html')} className={styles.button}> 
        <img src={evstig} alt="Изображение 1" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(goat, 'Описание для изображения 2', '#')} className={styles.button}>
        <img src={goat} alt="Изображение 2" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(gorod, 'Описание для изображения 3', '#')} className={styles.button}>
        <img src={gorod} alt="Изображение 3" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(pocht, 'Памятник Почтальону входит в серию скульптур, изображающих жителей Нижнего Новгорода конца XIX века. Установлен 10 сентября 2006 года и находится в самом конце пешеходной зоны по улице Большая Покровская. Автор композиции - нижегородский скульптор Владимир Федорович Шиканов. Местоположение памятника не случайно - он стоит в непосредственной близости от главного почтамта, где много лет назад находился ямской двор, являвшийся предшественником государственной почты. Каждый человек хоть раз видел почтальона (пусть даже только в старых кинофильмах). А вот как выглядел развозчик писем в конце XIX века - знают далеко не все. Это в наше время электронных писем и интернета почтальоны практически исчезли, а век назад без них было просто никак не обойтись. Ведь даже расстояния между городами тогда считали между главпочтамптами. Следует также сказать, что первый почтмейстер появился в Нижнем Новгороде более чем два века назад. Памятник изображает человека, одетого в свою особую униформу, с сумкой через плечо, в которой полным-полно корреспонденции. Он опирается на велосипед и выглядит так, будто остановился отдохнуть и скоро снова поедет развозить письма и газеты.', '#')} className={styles.button}>
        <img src={pocht} alt="Изображение 3" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(polovoy, 'Памятник "Половому" входит в серию скульптур, изображающих жителей Нижнего Новгорода конца XIX века и был установлен на Большой Покровской улице в 2006 году. Автор композиции - нижегородский скульптор Владимир Федорович Шиканов. "Половыми" в России до начала ХХ века называли обслуживающий персонал в трактирах. Именно в трактирах, поскольку аналогичных людей в ресторанах (после их появления в России в XIX веке) называли "официантами". Назывались половые так потому, что одной из обязанностей трактирного слуги было содержание пола в чистоте. В отличие от официантов, одевавшихся "по европейской моде", половые обычно были одеты по-русски: заправленные в сапоги штаны (часто белые) и рубаха навыпуск, подпоясанная шнуром с кистями. Основной обязанностью полового в трактире (как и официантов в ресторанах) было обслуживание клиентов. Если при трактире была гостиница, то половые "в нагрузку" выполняли также функции портье. Интересно, что чаще всего они не получали жалованья от хозяина - единственным их видом заработка были чаевые. Значительную часть половых составляли подростки 13-16 лет. В конце 2009 года памятник сильно постарадал от вандалов (что, к сожалению, отнюдь не редкость для скульптур на Большой Покровской): его уронили, в результате чего корпус разбился на несколько частей. Реставраторы основательно потрудились, восстанавливая его. Чтобы избежать повторения ситуации, конструкцию укрепили специальными штырями. Администрация Нижегородского района потратила на ремонт более 40 тыс. рублей. В результате, после нескольких месяцев работы, "половой" в 2010 году вновь появился на Большой Покровской, но уже в другом месте - на пересечении улиц Большая Покровская и Лыковая дамба, у входа в ресторан "Виталич".', '#')} className={styles.button}>
        <img src={polovoy} alt="Изображение 3" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(reader, 'Описание для изображения 3', '#')} className={styles.button}>
        <img src={reader} alt="Изображение 3" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(seller, 'Описание для изображения 3', '#')} className={styles.button}>
        <img src={seller} alt="Изображение 3" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(skripach, 'Описание для изображения 3', '#')} className={styles.button}>
        <img src={skripach} alt="Изображение 3" className={styles['thumbnail']} />
      </button>
      <button onClick={() => openModal(traktir, 'роыварпиоавыпроваыпроавпроваыпроавпроваыпроавыпроав', '#')} className={styles.button}>
        <img src={traktir} alt="Изображение 3" className={styles['thumbnail']} />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className={styles['modal-content']}>
          {modalImage && <img src={modalImage} alt="Изображение" className={styles['modal-img']} />}
          <p className={styles['modal-text']}>
            {modalDescription}
          </p>
          <div className={styles['modal-button-group']}>
            <a href={modalLink} className={styles['modal-link']}>
              Узнать больше
            </a>
            <button onClick={() => setModalIsOpen(false)} className={styles['modal-close-btn']}>
              Закрыть
            </button>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default MyApp;
