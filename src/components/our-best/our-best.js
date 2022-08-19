import './our-best.scss';

import OurBestItem from '../our-best-item/our-best-item';

import ourBestImageOne from '../../img/ouritem1.svg';
import ourBestImageTwo from '../../img/ouritem2.svg';
import ourBestImageThree from '../../img/ouritem3.svg';

const OurBest = () => {

   const ourBestData = [
      { info: 'Solimo Coffee Beans 2 kg', price: 10.73, imageURL: ourBestImageOne, id: 1 },
      { info: 'Presto Coffee Beans 1 kg', price: 15.99, imageURL: ourBestImageTwo, id: 2 },
      { info: 'AROMISTICO Coffee 1 kg', price: 6.99, imageURL: ourBestImageThree, id: 3 }
   ]

   const ourBestElements = ourBestData.map(item => {
      const { id, ...itemProps } = item;
      return (
         <OurBestItem key={id} {...itemProps} />
      )

   })

   return (
      <div className="our-best">
         <div className="container">
            <div className="our-best__wrapper">
               <h2 className="our-best__title">Our best</h2>
               <div className="our-best__row">
                  {ourBestElements}
               </div>
            </div>
         </div>
      </div>
   )
}


export default OurBest;