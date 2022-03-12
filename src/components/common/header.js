import React, {useState} from "react";
import { Link } from 'react-router-dom';
function Header() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <div className="header">
            <Link to="#" className='menu-bars'>
                <h1>
                    #
                </h1>
            </Link>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'mav-menu'}>
            <ul className='nav-menu-items'>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <h1>*</h1>
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Header;