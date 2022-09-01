import React from 'react'
import Logo from '../logo.svg'
import '../styling/Header.css'

function Header() {
  return (
    <div className="header__wrapper" >
      <div className="header__logo">
        <img src={Logo} width={25} alt="logo"/>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search" type="text"/>
        </div>
      </div>
      <div className="header__menuItems">
        <a href="#">Portfolio</a>
      </div>

    </div>
  )
}

export default Header
