import './Home.css';
import Navbar from '../Navbar/Navbar';
import ItemBox from '../ItemBox/ItemBox';
function Home () {

   

    return (
        <div className="home-container">
            <Navbar />
            <ItemBox />
            
        </div>
    )
}

export default Home;