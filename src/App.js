import { Component } from 'react';

import './nullstyle.scss';
import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import About from './components/about/about';
import OurBest from './components/our-best/our-best';
import OurCoffee from './components/our-coffee/our-coffee';
import ForYour from './components/for-your/for-your';

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         page: 'Coffee house',
      }
   }

   setCurrentPage = (page) => {
      this.setState({
         page,
      })
   }

   setCoffeePage = (event) => {
      event.preventDefault()
      this.setState({
         page: 'Our coffee',
      })
   }

   render() {

      const coffeeItems = [
         { name: 'AROMISTICO Coffee 3 kg', from: 'Brazil', price: 2.99, id: 1 },
         { name: 'AROMISTICO Coffee 1 kg', from: 'Kenya', price: 4.99, id: 2 },
         { name: 'AROMISTICO Coffee 3 kg', from: 'Brazil', price: 6.99, id: 3 },
         { name: 'AROMISTICO Coffee 1 kg', from: 'Brazil', price: 3.99, id: 4 },
         { name: 'AROMISTICO Coffee 5 kg', from: 'Brazil', price: 6.99, id: 5 },
         { name: 'AROMISTICO Coffee 1 kg', from: 'Columbia', price: 8.99, id: 6 },
      ]

      if (this.state.page === 'Coffee house') {
         return (
            <>
               <Header setCurrentPage={this.setCurrentPage} />
               <div className="wrapper">
                  <Main setCoffeePage={this.setCoffeePage}></Main>
                  <About />
                  <OurBest />
               </div>
               <Footer setCurrentPage={this.setCurrentPage} />
            </>
         )
      } else if (this.state.page === 'Our coffee') {
         return (
            <>
               <Header setCurrentPage={this.setCurrentPage} />
               <div className="wrapper">
                  <OurCoffee coffeeItems={coffeeItems} />
               </div>
               <Footer setCurrentPage={this.setCurrentPage} />
            </>
         )
      } else if (this.state.page === 'For your pleasure') {
         return (
            <>
               <Header setCurrentPage={this.setCurrentPage} />
               <div className="wrapper">
                  <ForYour coffeeItems={coffeeItems} />
               </div>
               <Footer setCurrentPage={this.setCurrentPage} />
            </>
         )
      }
   }
}

export default App;