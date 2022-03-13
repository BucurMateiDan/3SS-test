import React from 'react'
import {Nav, NavLink, Bars, NavMenu} from './navBarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to='/'>
                <img src={require('../../images/logo.jpg')} alt='logo' style={{width: 125}} />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/' style={{display: 'none'}}>
                    Home
                </NavLink>
                <NavLink to='/categories' >
                    Categories
                </NavLink>
                <NavLink to='/movies' >
                    MoviesByCategory
                </NavLink>
                <NavLink to='/asset' >
                    AssetDetails
                </NavLink>
                <NavLink to='/popular' >
                    Popular
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar;
