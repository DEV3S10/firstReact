import React from 'react';
import {Container} from "@material-ui/core";
import './deliver.css';

const Deliver = () => {
    return (
        <div style={{background: (`#e28a1f`)}}>
            <Container>
                <div className='deliver'>
                    <div className='img'>
                        <img src="https://st3.depositphotos.com/4320929/13948/v/600/depositphotos_139481982-stock-illustration-cute-cartoon-delivery.jpg" alt=""/>
                    </div>
                    <div className="deliver_text">
                        <p>Доставка по воскресеньям</p>
                        <h2>НЕ ОСУЩЕСТВЛЯЕТСЯ</h2>

                        <p>Прием заказов с 10-00 до 15-00
                            Доставка товара осуществляется с 12-00 до 18-00
                        </p>
                        <p>Доставка по городу Смартфонов,
                            Видео Регистраторов
                        </p>
                        <h2>ОТ 100 СОМ И ВЫШЕ</h2>

                        <p>Доставка по городу других товаров:
                            (Цена зависит от района доставки)
                        </p>
                        <h2>ОТ 100 СОМ И ВЫШЕ</h2>

                        <p>Теперь доступна доставка товара с нашего</p>
                        <h2>МАГАЗИНА</h2>

                        <p>Контактные номера телефонов для заказов:</p>
                        <ul>
                            <li>+996 704 429 080</li>
                            <li>+996 704 429 080</li>
                            <li>+996 704 429 080</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Deliver;