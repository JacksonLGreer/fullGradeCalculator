import './ItemBox.css';
import Item from '../Item/Item';
import { useState } from 'react'
import FalseItem from '../Item/FalseItem'
import TemplateItem from '../Item/TemplateItem'
import DisplayField from '../Item/DisplayField'

function ItemBox() {
    // Empty array of categories
    const [cats, setCats] = useState([]);

    // function to add category
    const addCat = (newCat) => {
        setCats((prevCats) => [...prevCats, newCat]);
        console.log(calculateGrade())
    };

    const calculateGrade = () => {
        let totalGrade = 0;
        // forEach() is good for calculating from the array
        cats.forEach((cat) => {
            totalGrade += ((cat.weight/100) * cat.grade);       
        })
        return totalGrade; //I forgot to return at first so dont forget
    }
    
    return (
        <div className="item-box-container">
            <FalseItem />
            <FalseItem />

             {cats.map(cat => (
                <Item 
                key={cat.id} 
                cat={cat}
                />
            ))}
            <TemplateItem onAddCat={addCat}/>
            <DisplayField calculateGrade={calculateGrade} cats={cats}/>
        
        </div>
    )
}

export default ItemBox;