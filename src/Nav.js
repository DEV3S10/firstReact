import React from 'react';
import './nav.css';
import {Container} from "@material-ui/core";
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <div style={{background: (`#00008b`)}}>
            <Container>
                <div className='nav'>
                    <Link to='/'>
                        <h2>Главная</h2>
                    </Link>
                    <ul>
                        <Link to='Deliver'>
                            <li>Доставка</li>
                        </Link>
                        <Link to='About'>
                            <li>О магзине</li>
                        </Link>
                        <Link to='Contact'>
                            <li>Контакты</li>
                        </Link>
                        <li>|</li>
                        <li>0 704 429 080</li>
                        <li>0 704 429 080</li>
                        <li>0 704 429 080</li>
                        <li>|</li>
                        <Link to='Adresses'>
                            <li>Адрес</li>
                        </Link>
                    </ul>
                </div>
                <div className="nav_2">
                    <input type="text" placeholder='ЖИВОЙ ПОИСК!'/>
                    <button>OK</button>
                </div>
            </Container>
        </div>
    );
};

export default Nav;