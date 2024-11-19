import './ItemBox.css';
import Item from '../Item/Item';
import { useState } from 'react'
import FalseItem from '../Item/FalseItem'
import TemplateItem from '../Item/TemplateItem'
function ItemBox() {
    
    const [cats, setCats] = useState([
        {
            id: 1,
            name: 'Tests',
            weight: 35,
            grade: 80,
        },
        {
            id: 2,
            name: 'Projects',
            weight: 25,
            grade: 80,
        },
        {
            id: 3,
            name: 'Quizzes',
            weight: 20,
            grade: 80,
        },
        {
            id: 4,
            name: 'Homework',
            weight: 20,
            grade: 80,
        }
    ]);

    const addCat = (newCat) => {
        setCats((prevCats) => [...prevCats, newCat]);
    };

   
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
        </div>
    )
}

export default ItemBox;