import { useEffect, useState } from "react"

const Menu = ({visible, isVisible, setCounter, counter}) => {
  
  return (
    <div className="menu__container">
      <i onClick={isVisible}className='menu__header bx bx-menu bx-lg'></i>
      <div className={`menu__group  ${visible ? 'menu-visible': ''}`}>
        <ul className="menu__list">
          <li onClick={() => setCounter(1)} className={`menu__item ${counter == 1 ? 'active' : ''}`}>Home</li>
          <li onClick={() => setCounter(2)} className={`menu__item ${counter == 2 ? 'active' : ''}`}>Acerca de mi</li>
          <li onClick={() => setCounter(3)} className={`menu__item ${counter == 3 ? 'active' : ''}`}>Portafolio</li>
          <li onClick={() => setCounter(4)} className={`menu__item ${counter == 4 ? 'active' : ''}`}>Contacto</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Menu