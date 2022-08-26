import React from 'react';
import {Button, Container} from "@material-ui/core";
import './menu.css';

const Menu = () => {
    return (
        <div style={{background: `#cdc8c8`}}>
            <Container>
                <div className='center'>
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
                    <div className='menu_text'>
                        <div className='menu_text_2'>
                            <h1>Добро пожаловать</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit .
                                Ea et illo iure laudantium molestiae officia porro qui quod sequi tempora!
                                Atque culpa expedita harum illo labore laborum, laudantium nobis numquam quas quisquam quod rem sapiente tempore,
                                totam, voluptate! Quia, saepe.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">

                </div>
            </Container>
        </div>
    );
};

export default Menu;