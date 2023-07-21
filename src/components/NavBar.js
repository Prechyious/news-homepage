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
        <nav className="sticky top-0 left-0 bg-off-white flex items-center justify-between p-5 lg:px-8">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="hidden lg:flex lg:gap-[50px] lg:text-very-dark-blue">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">New</NavLink>
                <NavLink to="/">Popular</NavLink>
                <NavLink to="/">Trending</NavLink>
                <NavLink to="/">Categories</NavLink>
            </div>
            <div
                className="cursor-pointer flex lg:hidden"
                onClick={handleClick}
            >
                <img src={hamburgerMenu} alt="hamburger-menu" />
            </div>

            <div
                className={`absolute right-0 bg-white
                ${
                    isOpen
                        ? "shadow-[-100px_2px_2px_200px_#00000065]"
                        : "shadow-none"
                }  top-0 w-[60vw] h-screen overflow-hidden transition-all duration-300 ease-in-out lg:hidden
            ${isOpen ? "right-0" : "right-[-120%]"}`}
            >
                <img
                    className="cursor-pointer absolute top-5 right-5 h-[31px] w-8"
                    src={hamburgerClose}
                    alt="hamburger-menu-close"
                    onClick={handleClick}
                />
                <div className="flex flex-col justify-center gap-[20px] mt-[20vh] p-5 font-medium text-lg text-dark-grayish-blue lg:hidden">
                    <NavLink to="/" onClick={handleClick}>
                        Home
                    </NavLink>
                    <NavLink to="/" onClick={handleClick}>
                        New
                    </NavLink>
                    <NavLink to="/" onClick={handleClick}>
                        Popular
                    </NavLink>
                    <NavLink to="/" onClick={handleClick}>
                        Trending
                    </NavLink>
                    <NavLink to="/" onClick={handleClick}>
                        Categories
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
