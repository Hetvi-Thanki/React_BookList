import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const firstBook={
    img:'https://images-na.ssl-images-amazon.com/images/I/41rFCQxh5TL._AC_SX184_.jpg',
    title:'Make Your Bed: Little Things That Can Change Your Life...And Maybe the World',
    author:'Admiral William H. McRaven'
}

const secondBook={
    img:'https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title:'Oh, the Places You will Go!',
    author:'Dr. Seuss '
}
function BookList(){
    return (
    <section className='booklist'>
        <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        >
            <p>
                From soaring to high heights and seeing great sights to being left in a Lurch on a prickle-ly perch, 
                Dr. Seuss addresses life’s ups and downs with his trademark humorous verse and whimsical illustrations.
                The inspiring and timeless message encourages readers to find the success that lies within, no matter
            </p>
        </Book>

        <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        />
    </section>
    );
};

const Book =(props)=>{
  const {img,title,author}=props;
    return <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4 style={{color:'#617d98',fontSize:'0.75rem',margin:'0.25rem'}}>{author}</h4>
        {props.children}
    </article>
};

ReactDom.render(<BookList />, document.getElementById('root'));

//inline css is more powerful then .css file