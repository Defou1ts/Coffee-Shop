import { Component } from 'react';

import './header.scss'
import logo from '../../img/headerlogo.svg';

class Header extends Component {
   constructor(props) {
      super(props)
   }

   onSetPage = (event) => {
      const { setCurrentPage } = this.props;
      event.preventDefault()
      setCurrentPage(event.currentTarget.textContent)
   }

   render() {

      return (
         <header className='header'>
            <img src={logo} alt="Header logo" />
            <a onClick={(event) => this.onSetPage(event)} href="CoffeeHouse" className="header__link">Coffee house</a>
            <a onClick={(event) => this.onSetPage(event)} href="OurCofee" className="header__link">Our coffee</a>
            <a onClick={(event) => this.onSetPage(event)} href="ForYour" className="header__link">For your pleasure</a>
         </header>
      )
   }
}

export default Header;