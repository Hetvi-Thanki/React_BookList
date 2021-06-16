import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
const books=[
{   id:1,
    img:'https://images-na.ssl-images-amazon.com/images/I/41rFCQxh5TL._AC_SX184_.jpg',
    title:'Make Your Bed: Little Things That Can Change Your Life...And Maybe the World',
    author:'Admiral William H. McRaven'
}
,

{
    id:2,
    img:'https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title:'Oh, the Places You will Go!',
    author:'Dr. Seuss '
},
{
    id:3,
    img:'https://images-na.ssl-images-amazon.com/images/I/518bm5DN-VS._AC_SX184_.jpg',
    title:'Malibu Rising: A Novel',
    author:'Taylor Jenkins Reid'
},
];
function BookList(){
    return (
    <section className='booklist'>
        {books.map((book)=>{
            return (
                <Book key={book.id} {...book}></Book>
            );
        })}
    </section>
    );
};

const Book =({img,title,author})=>{ 
  //const {img,title,author}=props;

  //attribute, eventHandler
  //onClick,onMouseOver
  const clickHandler =()=>{
      alert('hello');
  }
    return (
    <article className='book'>
        <img src={img} alt=''/>
        <h1 onClick={()=> console.log(title)}>{title}</h1> {/* inline function*/}        
        <h4 style={{color:'#617d98',fontSize:'0.75rem',margin:'0.25rem'}}>{author}</h4>
        <button type="button" onClick={clickHandler }>Refernce</button> {/* refering a function*/} 
        {/* {props.children} */}
    </article>
    );
};

ReactDom.render(<BookList />, document.getElementById('root'));

//inline css is more powerful then .css file