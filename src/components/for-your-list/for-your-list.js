import ListItem from "../list-item/list-item";

const ForYourList = (props) => {

   const { coffeeItems } = props;

   const coffeeListItems = coffeeItems.map(item => {
      const { id, ...itemProps } = item;
      return (
         <ListItem key={id} {...itemProps} />
      )
   })

   return (
      <div className="product-list">
         <div className="container">
            <div className="product-list__wrapper">
               <div className="product-list__row">
                  {coffeeListItems}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ForYourList;