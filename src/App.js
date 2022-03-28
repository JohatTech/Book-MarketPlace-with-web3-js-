import './App.css';

import {books} from './books'

import Book from './Book'

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <h1>Decentralized Book MarketPlace</h1>
         <button className='btn1'>Be a Buyer</button>
         <button className='btn2' >Be a Seller</button>
      </header>
      {books.map((books)=>{
          return <Book key = {books.id} book= {books}/>
        })}
    </section>
  );
}

export default App;
