import './ItemBox.css';
import Item from '../Item/Item';
import { useState } from 'react'
import FalseItem from '../Item/FalseItem'
import TemplateItem from '../Item/TemplateItem'
import DisplayField from '../Item/DisplayField'

function ItemBox() {
    const [cats, setCats] = useState([]);

    const addCat = (newCat) => {
        setCats((prevCats) => [...prevCats, newCat]);
        console.log(calculateGrade())
    };

    const calculateGrade = () => {
        let totalGrade = 0;
        cats.forEach((cat) => {
            totalGrade += ((cat.weight/100) * cat.grade);       
        })
        return totalGrade;
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