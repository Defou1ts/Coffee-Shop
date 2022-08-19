import ListItem from "../list-item/list-item";

const OurCoffeeList = (props) => {

   const { from, filter, coffeeItems } = props;


   const filteredCoffeeItems = coffeeItems.filter(item => {
      if (from === 'all') return item;
      return item.from === from
   }).filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

   const coffeeListItems = filteredCoffeeItems.map(item => {
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

export default OurCoffeeList;