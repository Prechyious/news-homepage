import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-menu.svg";
import hamburgerClose from "../assets/images/icon-menu-close.svg";
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between p-5">
            <div>
                <Link>
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="hidden md:flex md:gap-[10px]">
                <NavLink to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/" activeClassName="active">
                    New
                </NavLink>
                <NavLink to="/" activeClassName="active">
                    Popular
                </NavLink>
                <NavLink to="/" activeClassName="active">
                    Trending
                </NavLink>
                <NavLink to="/" activeClassName="active">
                    Categories
                </NavLink>
            </div>

            <div
                className="cursor-pointer flex md:hidden"
                onClick={handleClick}
            >
                <img src={hamburgerMenu} alt="hamburger-menu" />
            </div>

            <div
                className={`absolute right-0 bg-white shadow-2xl top-0 w-[50vh] h-screen overflow-hidden transition-all duration-300
            ${isOpen ? "right-0" : "right-[-100%]"}`}
            >
                <img
                    className="cursor-pointer absolute top-5 right-5 h-[31px] w-8"
                    src={hamburgerClose}
                    alt="hamburger-menu-close"
                    onClick={handleClick}
                />
                <div className="flex flex-col justify-center gap-[20px] mt-[20vh] p-5 font-normal text-lg text-dark-grayish-blue">
                    <NavLink to="/" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                        New
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                        Popular
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                        Trending
                    </NavLink>
                    <NavLink to="/" activeClassName="active">
                        Categories
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
