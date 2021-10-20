import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";

const Navbar = () => {
    return (
        <nav>
            <input type={"checkbox"} id={"hmt"} className={s.hiddenMenuTicker}/>
            <label className={s.btnMenu} htmlFor={"hmt"}>
                <span className={s.first}></span>
                <span className={s.second}></span>
                <span className={s.third}></span>
            </label>

            <ul className={s.hiddenMenu}>
                <li className={`${s.item} ${s.active}`}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>PRE_JUNIOR</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>JUNIOR</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeLink}>JUNIOR_PLUS</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;