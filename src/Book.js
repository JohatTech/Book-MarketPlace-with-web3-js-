//this is the component of the books 
import React from 'react';
import ReactDOM from 'react-dom';
import Books from './books';

const Book = (props) =>{
    const {name, img, author, price} = props.book;
    return(
        <article className = "Book">
            <img src={img}></img>
            <h2>{name}</h2>
            <h4>{author}</h4>
            <h4>Price: {price}</h4>
            <button className='buy'>Buy</button> 
        </article> 
    )
}
export default Book ; 