import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Active = ({isActive}) => (isActive ? s.active : s.item);


const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={Active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={Active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={Active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={Active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={Active}>Settings</NavLink>
        </div>
        <div className={`${s.item} ${s.itemFriends}`}>
            <NavLink to="/friends" className={Active}>Friends</NavLink>
        </div>
    </nav>
}

export default Navbar;