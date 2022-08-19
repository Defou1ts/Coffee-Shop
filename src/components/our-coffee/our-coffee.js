import './our-coffee.scss'

import { Component } from 'react';

import OurCoffeeMain from '../our-coffee-main/our-coffee-main';
import OurCoffeeAbout from '../our-coffee-about/our-coffee-about';
import OurCoffeeFilter from '../our-coffee-filter/our-coffee-filter';
import OurCoffeeList from '../our-coffee-list/our-coffee-list';

class OurCoffee extends Component {
   constructor(props) {
      super(props)
      this.state = {
         from: 'all',
         filter: '',
      }
   }

   setFrom = (event) => {
      this.setState({
         from: event.target.textContent,
      })
   }

   setFilter = (event) => {
      this.setState({
         filter: event.target.value,
      })
   }

   render() {
      const { coffeeItems } = this.props

      return (
         <>
            <OurCoffeeMain />
            <OurCoffeeAbout />
            <OurCoffeeFilter setFrom={this.setFrom} setFilter={this.setFilter} />
            <OurCoffeeList coffeeItems={coffeeItems} from={this.state.from} filter={this.state.filter} />
         </>
      )
   }
}


export default OurCoffee;