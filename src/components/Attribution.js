import { Link } from "react-router-dom";

const Attribution = () => {
    return (
        <footer className="text-center text-slate-400 font-bold text-[11px] mt-5">
            Challenge by{" "}
            <Link
                className="text-very-dark-blue underline"
                to="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
            >
                Frontend Mentor
            </Link>
            . Coded by{" "}
            <Link className="text-very-dark-blue underline" to="/">
                Leghemo Precious
            </Link>
            .
        </footer>
    );
};

export default Attribution;
