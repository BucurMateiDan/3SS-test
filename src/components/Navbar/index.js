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
                <NavLink to='/' activeStyle={{display: 'none'}}>
                    Home
                </NavLink>
                <NavLink to='/categories' activeStyle>
                    Categories
                </NavLink>
                <NavLink to='/movies' activeStyle>
                    MoviesByCategory
                </NavLink>
                <NavLink to='/asset' activeStyle>
                    AssetDetails
                </NavLink>
                <NavLink to='/popular' activeStyle>
                    Popular
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar;
