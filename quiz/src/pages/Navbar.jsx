import { NavLink } from "react-router-dom";
import "../css/Navbar.css"

export function Navbar() {

    return (
        <div>
            <div className="navbar_main">
                <NavLink to="/" className={({ isActive }) => { return isActive === true ? "nav_active" : "nav_nonactive" }} > Home </NavLink>
                <h2 className="navbar_heading"> ARE YOU DISILLUSIONED? </h2>
                <NavLink to="/quiz/0" className={({ isActive }) => { return isActive === true ? "nav_active" : "nav_nonactive" }} > Quiz </NavLink>
            </div >
            <hr />
        </div>
    )
}