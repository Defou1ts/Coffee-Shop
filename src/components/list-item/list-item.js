import itemImage from '../../img/ourcoffeelistitem.svg';

const ListItem = (props) => {
   const { name, from, price } = props;
   return (
      <div className="product-list__column">
         <div className="product-list__item">
            <img src={itemImage} alt="Coffee" className="product-list__image" />
            <p className="product-list__title">{name}</p>
            <p className="product-list__from">{from}</p>
            <p className="product-list__price">{price}$</p>
         </div>
      </div>
   )
}


export default ListItem;