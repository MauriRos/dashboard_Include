import {NavLink} from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as IconName from "react-icons/io5"

const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaHome className="me-2"/>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><IconName.IoShirtSharp className="me-2"/>Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className="text-white rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaUsers className="me-2"/>Usuarios</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;