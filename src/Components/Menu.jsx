import { useEffect, useState } from "react"

const Menu = ({visible, isVisible, setCounter, counter}) => {
  
  const handleAll = e => {
    if ( e == 1) setCounter(1)
    if ( e == 2) setCounter(2)
    if ( e == 3) setCounter(3)
    if ( e == 4) setCounter(4)
    isVisible()
  }
  return (
    <div className="menu__container">
      <i onClick={isVisible}className='menu__header bx bx-menu bx-lg'></i>
      <div className={`menu__group  ${visible ? 'menu-visible': ''}`}>
        <ul className="menu__list">
          <li onClick={() => handleAll(1)} className={`menu__item ${counter == 1 ? 'active' : ''}`}>Home</li>
          <li onClick={() => handleAll(2)} className={`menu__item ${counter == 2 ? 'active' : ''}`}>Acerca de mi</li>
          <li onClick={() => handleAll(3)} className={`menu__item ${counter == 3 ? 'active' : ''}`}>Portafolio</li>
          <li onClick={isVisible} className={`menu__item ${counter == 4 ? 'active' : ''}`}>Contacto</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Menu