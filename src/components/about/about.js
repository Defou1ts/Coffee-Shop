import './about.scss'
import blackBeansLogo from '../../img/blackbeanslogo.svg'
const About = () => {
   return (
      <div className="about">
         <div className="container">
            <div className="about__wrapper">
               <h2 className="about__title">About Us</h2>
               <img className='about__image' src={blackBeansLogo} alt="Black beans" />
               <p className="about__content">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                  Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face.</p>
               <p className="about__content">Now residence dashwoods she excellent you. Shade being under his bed her, Much
                  read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                  horrible but confined day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active living depend son
                  repair day ladies now.</p>
            </div>
         </div>
      </div>
   )
}

export default About;