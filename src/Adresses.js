import React from 'react';
import {Button, Container} from "@material-ui/core";
import './adresses.css'

const Adresses = () => {
    return (
        <div style={{background: `#e5d9d9`}}>
            <Container>
                <div className="adresses">
                    <div className='category'>
                        <Button variant="outlined" color="primary">
                            Новинки
                        </Button>
                        <Button variant="outlined" color="primary">
                            Гаджеты
                        </Button>
                        <Button variant="outlined" color="primary">
                            Смартфоны
                        </Button>
                        <Button variant="outlined" color="primary">
                            Подарки
                        </Button>
                        <Button variant="outlined" color="primary">
                            Для дома
                        </Button>
                        <Button variant="outlined" color="primary">
                            Хобби,отдых
                        </Button>
                        <Button variant="outlined" color="primary">
                            Разное
                        </Button>
                    </div>
                    <div className="adresses_text">
                        <h2>Контакты</h2>
                        <p><img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/geo_fence-128.png" alt=""/>
                            Киевская 210
                            (пересекает Темирязиева )
                        </p>
                        <p><img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/67-gmail-128.png" alt=""/>
                            kubanychbekovomat@gmail.com
                        </p>
                        <p><img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-128.png" alt=""/>
                            Рабочее время:
                        </p>
                        <p>
                            с 10-00 до 18-00
                        </p>
                        <p>
                            Суббота: с 10-00 до 17-00
                        </p>
                        <p>
                            Воскресенье выходной
                        </p>
                        <p><img src="https://cdn3.iconfinder.com/data/icons/outline-style-1/512/phone-128.png" alt=""/>
                            +996 704 429 080</p>
                        <p>+996 700 871 445</p>
                        <div className="seti">
                            <a href="https://www.facebook.com/oomat.kubanychbekov"><img src="https://cdn2.iconfinder.com/data/icons/social-18/512/Facebook-2-128.png" alt=""/></a>
                            <a href="https://instagram.com/ilyasovich_08?igshid=7qpjpfo5ltoi"><img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-128.png" alt=""/></a>
                            <a href=""><img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/vkontakte-128.png" alt=""/></a>
                            <a href=""><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-128.png" alt=""/></a>
                            <a href=""><img src="https://cdn4.iconfinder.com/data/icons/socialcones/508/Telegram-128.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Adresses;