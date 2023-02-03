import breakfast from './images/breakfast.png'
import vegetables from './images/vegetables.png'
import appetizers from './images/appetizers.png'
import arrows from './images/arrows.png'

function Book() {
    return(
        <>

        <div className="page-title">
            <h1>Recipe Book</h1>
            <div className="divider"></div>
        </div>
       

        <div className="book-container">

        <a id="chapter-card-a" href="/Chapter-Breakfast">
        <div className="chapter-card">
        <div className='chapter-image'>
        <img id="chapter-image" src={breakfast} alt="breakfast smoothies" />
        </div>
        <h4>Breakfast Recipes</h4>
        </div>
        </a>

        <a id="chapter-card-a" href="/Chapter-Vegetables">
        <div className="chapter-card">
        <div className='chapter-image'>
        <img id="chapter-image" src={vegetables} alt="vegetables" />
        </div>
        <h4>Vegetable Recipes</h4>
        </div>
        </a>

        <a id="chapter-card-a" href="/Chapter-Appetizers">
        <div className="chapter-card">
        <div className='chapter-image'>
        <img id="chapter-image" src={appetizers} alt="appetizers" />
        </div>
        <h4>Appetizer Recipes</h4>
        </div>
        </a>


        <div className='arrows'>
        <img src={arrows} alt="back and next arrows" />
        </div>
        </div>

        </>
    );
}
export default Book;