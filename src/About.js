import React from 'react';
import {Button, Container} from "@material-ui/core";
import './about.css'

const About = () => {
    return (
        <div style={{background: `#ddd2ec`}}>
            <Container>
                <div className="about">
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
                    <div className='about_text'>
                        <h1>О магазине</h1>
                        <p>Начнем прежде всего с пояснения, что же всё таки такое Гаджет и что это означает ?</p>
                        <p> Гаджет (англ. gadget — приспособление) — оригинальное,
                            нестандартное техническое приспособление.
                            Сегодня гаджетом можно считать любой цифровой прибор, достаточно небольшой,
                            чтобы надеть на руку или подключить к КПК или смартфонам.</p>
                        <p>На данном сайте мы попробуем подробно ознакомить вас с некоторыми экземплярами Гаджетов.
                            А некоторые вещи вы даже сможете приобрести у нас в Гаджет Магазине.
                            Я могу пообещать что большинство этих вещей будут эксклюзивны,
                            уверен большинство из вас даже никогда о них не слышали.
                            А может и слышали. Но уверяю, мы будем стараться вас удивлять такими эксклюзивными Гаджетами каждый день.
                            На дворе уже 21 век и что мы видим:</p>
                        <p>  Часы со встроеной видеокамерой и сотовым телефоном, Умный робот пылесос который может запросто прибрать за вами вашь рабочий стол.(крошки, пыль и тд) ,
                            Робот будильник, который может утром рано разбудив вас ,убегать от вас же куда подальше, чтобы вы смогли проснуться,
                            Разные устройства которые переводят непонятный лай собаки или плач ребенка на понятный вам язык - И таких Гаджетов оочень и ооочень много. И опять же мы постараемся подробно вам о них рассказать, а более популярные модели постараемся выложить у нас в Гаджет Магазине....
                            Спасибо за Внимание.</p>
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

export default About;