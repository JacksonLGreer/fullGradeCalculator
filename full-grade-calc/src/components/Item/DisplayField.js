import './Item.css';

function FalseItem({calculateGrade, cats}) {

    let totalGrade = 0;

    

    return (
        <div>
            <div className="item-container">
                <h3>Grade: {calculateGrade()}</h3>
            </div>  
        </div>
    )
}

export default FalseItem;