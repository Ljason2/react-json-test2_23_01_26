


function ListItem({item,onDelete}){
    const DelectClick=()=> onDelete(item.id)

    return(
        <figure>
        <img src={item.pic} alt={item.title}/> 
        <figcaption>
            <dl>
                <dt>{item.title}</dt>
                <dd>{item.type}</dd>
                <dd>
                    <button type="button"
                    onClick={DelectClick}
                    >Delete</button>
                </dd>
            </dl>
        </figcaption>
        </figure>
    
    )

}






function ProductList({items,onDelete}){
    return(
        <ul>
            {
                items.map((item)=>{
                    return <li key={item.id}>
                        <ListItem
                        item={item} onDelete={onDelete}
                        />
                    </li>
                })
            }
        </ul>
    )
}



export default ProductList;