import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
const NavBar =() => {
    return (
        <div className='NavBar'>
                   <Nav>
                       <NavLink to="/">
                          <h1> Logo </h1>
                       </NavLink>
                    <Bars />
                    <NavMenu>
                        <NavLink to="/about" >
                            About
                        </NavLink>
                        <NavLink to="/post" >
                            Post
                        </NavLink>
                        <NavLink to="/profile" >
                            Profile
                        </NavLink>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                   </Nav>
        </div>
    )
}

export default NavBar;