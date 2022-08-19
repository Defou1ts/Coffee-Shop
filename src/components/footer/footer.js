import { Component } from 'react';

import './footer.scss';
import menuLogo from '../../img/footerlogo.svg';
import footerLogo from '../../img/blackbeanslogo.svg';

class Footer extends Component {
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
         <footer className="footer">
            <div className="container">
               <div className="footer__menu">
                  <img src={menuLogo} className="footer__image"></img>
                  <div className="footer__list">
                     <a onClick={(event) => this.onSetPage(event)} href="CoffeeHouse" className="footer__link">Coffee house</a>
                     <a onClick={(event) => this.onSetPage(event)} href="OurCofee" className="footer__link">Our coffee</a>
                     <a onClick={(event) => this.onSetPage(event)} href="ForYour" className="footer__link">For your pleasure</a>
                  </div>
               </div>
               <img src={footerLogo} className="footer__logo"></img>
            </div>
         </footer>
      )
   }
}


export default Footer;