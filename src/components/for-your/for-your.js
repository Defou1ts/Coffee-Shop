import './for-your.scss';

import ForYourMain from '../for-your-main/for-your-main';
import ForYourAbout from '../for-your-about/for-your-about';
import ForYourList from '../for-your-list/for-your-list';

const ForYour = (props) => {
   const { coffeeItems } = props;
   return (
      <>
         <ForYourMain />
         <ForYourAbout />
         <ForYourList coffeeItems={coffeeItems} />
      </>
   )

}

export default ForYour;

