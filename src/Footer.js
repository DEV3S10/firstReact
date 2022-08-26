import React from 'react';
import {Container} from "@material-ui/core";
import {Link} from "react-router-dom";
import './footer.css'

const Footer = () => {
    return (
        <div>
            <Container>
                <div className='map'>
                    <a href="https://www.google.com/search?q=%D0%BA%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+210&oq=%D0%BA%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+21&aqs=chrome.1.69i57j0i19l9.16206j0j7&sourceid=chrome&ie=UTF-8#">
                        <img src="https://www.google.com/maps/vt/data=dakejEr_diOcMrm6sQQfiprP503yjjvqPu_rwcPQW1NkaKoemEjM0o4LWlVf3cjHMIEamsbmHlQsGjQIp71qULLInkd-JaoAfii3iCPxzBLqfABQjy7Y1n7c1IZgHIIG-7S08wFNkuTf-8A-FXlWO3PcRcw" alt=""/>
                    </a>
                </div>
                <div className='footer_1'>
                    <Link to='Menu'>
                        <p>Главная</p>
                    </Link>
                    <Link to='Deliver'>
                        <p>Доставка</p>
                    </Link>
                    <Link to='About'>
                        <p>О магзине</p>
                    </Link>
                    <Link to='Contact'>
                        <p>Контакты</p>
                    </Link>
                    <Link to='Adresses'>
                        <p>Адрес</p>
                    </Link>
                </div>
                <div className='footer_2'>
                    <p>Все права защищены. © 2009 - 2021</p>
                    <p>Мы в соц. сетях
                        <a href="https://instagram.com/ilyasovich_08?igshid=vpu4sekfcgmr">
                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-128.png" alt=""/>
                        </a>
                    </p>
                    <p>Дизайн проекта: Кубанычбеков Оомат</p>
                    <p> Разработка проекта: DEV3S</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;