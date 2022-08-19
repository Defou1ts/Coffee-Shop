import aboutImage from '../../img/aboutimage.svg'
import blackBeansLogo from '../../img/blackbeanslogo.svg'

const OurCoffeeAbout = () => {
   return (
      <div className="about-product">
         <div className="container">
            <div className="about-product__row">
               <div className="about-product__column about-product__column_second">
                  <div className="about-product__image">
                     <img src={aboutImage} alt="" />
                  </div>
               </div>
               <div className="about-product__column about-product__column_first">
                  <div className="about-product__item">
                     <h2 className="about-product__title">About our beans</h2>
                     <img src={blackBeansLogo} alt="" className="about-product__logo" />
                     <p className="about-product__content">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br /> <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                     </p>
                  </div>
               </div>
            </div>
            <div className="about-product__line"></div>
         </div>
      </div>
   )
}

export default OurCoffeeAbout;