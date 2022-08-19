import './our-best-item.scss';

const OurBestItem = (props) => {
   const { info, price, imageURL } = props;
   return (
      <div className="our-best__column">
         <div className="our-best__item">
            <img src={imageURL} alt="" className="our-best__image" />
            <p className="our-best__info">{info}</p>
            <p className="our-best__price">{price}$</p>
         </div>
      </div>
   )
}


export default OurBestItem;