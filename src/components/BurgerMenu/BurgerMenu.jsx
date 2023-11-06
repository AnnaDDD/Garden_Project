import React, { useState } from "react";
import './navbar.css'
import { HashLink } from "react-router-hash-link";

export const BurgerMenu = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="wrapper">
            <nav className="nav">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <ul className="menu-list">
                    
						<li><HashLink smooth to="/" >Main Page</HashLink></li>
						<li><HashLink smooth to="/products" state="all" >All products</HashLink></li>
            			<li><HashLink smooth to="/products" state="sale">All sales</HashLink></li>

                </ul>
            </div>
        </div>
    )
}