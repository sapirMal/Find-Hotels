import React from 'react';
// import {NavLink} from 'react-router-dom';
import style from './NavItem.css';
const navItem = (props) => (
    <li className={style.NavItem}>
        <a href={props.link} >
            {props.children}
        </a>
    </li>
);

export default navItem;