import './main.scss';
import beansLogo from '../../img/beanslogo.svg'

const Main = (props) => {
   const { setCoffeePage } = props;
   return (
      <main className="main">
         <div className="container">
            <div className="main__wrapper">
               <h1 className="main__title">Everything You Love About Coffee</h1>
               <img src={beansLogo} alt="Beans" className="main__image" />
               <h2 className="main__sub-title">We makes every day full of energy and taste</h2>
               <h2 className="main__sub-title">Want to try our beans?</h2>
               <a href="More" onClick={(e) => setCoffeePage(e)} className="main__link">More</a>
            </div>
         </div>
      </main>
   )
}

export default Main;