import './Work.css';
import ProductList from '../ProductList';
import { useState } from 'react';
import mockupData from '../data.json'




function Work(){

    const [items,setItems] = useState(mockupData)
    const [order,setOrder] = useState('id')
    const DelectItem =(id)=>{
    const nextItem =  items.filter((item)=> item.id !==id);
    setItems(nextItem)
}


const sortItem= items.sort((a,b)=>{return a[order].length - b[order].length})

function typeLength(){
setOrder('type')
}

function titleLength(){
    setOrder('title')
    }
    
    return(
        <article id="work">
            <div>
            <h1>Work</h1>
            <div id='btn'>
        <button type='button'
        onClick={typeLength}
        >type의 문자열 길이순서</button>

        <button type='button'
        onClick={titleLength}
        >title의 문자열 길이순서</button>
            </div>
        <ProductList
        items={sortItem} onDelete={DelectItem}
        />
        </div>
        </article>
    )
}

export default Work;