import './our-coffee-filter.scss';

import { Component } from 'react';


class OurCoffeeFilter extends Component {
   constructor(props) {
      super(props)
      this.state = {
         input: '',
         from: 'all',
      }
   }

   onInput = (event) => {
      this.setState({
         input: event.target.value,
      });
      this.props.setFilter(event);
   }

   onChangeFrom = (event) => {
      this.setState({
         from: event.target.textContent,
      });
      this.props.setFrom(event);
   }

   render() {

      const buttonsData = [
         { text: 'Brazil', id: 1 },
         { text: 'Kenya', id: 2 },
         { text: 'Columbia', id: 3 },
      ]

      const buttons = buttonsData.map(button => {
         let className = 'our-coffee-filter__btn'
         if (this.state.from === button.text) {
            className += ' active'
         }
         return (
            <button key={button.id} onClick={(event) => this.onChangeFrom(event)} className={className}>{button.text}</button>
         )
      })

      return (
         <div className="our-coffee-filter" >
            <div className="our-coffee-filter__row">
               <div className="our-coffee-filter__column">
                  <span className="our-coffee-filter__sub-title">Lookiing for</span>
                  <input onChange={(event) => this.onInput(event)} type="text" placeholder='start typing here...' className="our-coffee-filter__input" />
               </div>
               <div className="our-coffee-filter__column">
                  <span className="our-coffee-filter__sub-title">Or filter</span>
                  <div className="our-coffee-filter__btns">
                     {buttons}
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default OurCoffeeFilter;