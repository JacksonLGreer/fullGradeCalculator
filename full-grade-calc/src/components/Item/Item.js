import './Item.css';

function Item({cat}) {
    return(
        <div>
            <div className="item-container">
                <p>{cat.name}</p>
                <p>{cat.weight}</p>
                <p>{cat.grade}</p>
            </div>      
        </div>
    )
    
}

export default Item;