import './Item.css';
import { useState } from 'react'


function TemplateItem( {onAddCat} ) {

    
    const [name, setName] = useState('');
    const [weight, setWeight] = useState();
    const [grade, setGrade] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && weight > 0 && grade >= 0) {
            // create the new object
            const newCategory = {
                name,
                weight,
                grade,
            }
            // adds the new category to the list
                onAddCat(newCategory)
                // resets the field
                setName('');
                setWeight(0);
                setGrade(0);
            
        }

        
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="item-container">
                <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Category Name"
                />
                <input 
                type="number"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter Weight"
                />
                <input 
                type="number"
                name="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Enter Grade"
                />
                <button type="submit">Add</button>
            </form> 
        </div>
    )
}

export default TemplateItem;