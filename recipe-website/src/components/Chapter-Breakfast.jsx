import fruit from './images/fruit-salad.png'
import avocado from './images/avocado-eggs.png'
import yogurt from './images/yogurt-smoothie.png'
import arrows from './images/arrows.png'


function breakfast() {
    return(
        <>
        <div className="page-title">
            <h1>Chapter : Breakfast</h1>
            <div className="divider"></div>
        </div>


    <div className="chapter-container">
        
    <div className="chapter-section">

            <div className="section-image">
            <img id="suggest-img" src={fruit} alt="fruit salad" />
            </div>

            <div className="section-text">
            <h2>Fruit Salad</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at numquam iure, molestiae ipsum amet commodi voluptatibus assumenda nulla animi dicta! Architecto cupiditate delectus dolore aperiam! Consectetur debitis aperiam nostrum.</p>

            <div className='recipe-button'>
            <button id='recipe-button'>See Recipe</button>
            </div>
            </div>
            
    </div>

    <div className="chapter-section">

        <div className="section-image">
        <img id="suggest-img" src={avocado} alt="Eggs on Avocado Toast" />
            </div>

            <div className="section-text">
            <h2>Eggs & Avocado Toast</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at numquam iure, molestiae ipsum amet commodi voluptatibus assumenda nulla animi dicta! Architecto cupiditate delectus dolore aperiam! Consectetur debitis aperiam nostrum.</p>
            
            <div className='recipe-button'>
            <button id='recipe-button'>See Recipe</button>
            </div>
            </div>
    </div>


    <div className="chapter-section">

            <div className="section-image">
            <img id="suggest-img" src={yogurt} alt="Yogurt smoothies" />
            </div>

            <div className="section-text">
                <h2>Yogurt Smoothie</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at numquam iure, molestiae ipsum amet commodi voluptatibus assumenda nulla animi dicta! Architecto cupiditate delectus dolore aperiam! Consectetur debitis aperiam nostrum.</p>

                <div className='recipe-button'>
                <button id='recipe-button'>See Recipe</button>
            </div>
            </div>
        </div>

        <div className='arrows'>
        <img src={arrows} alt="back and next arrows" />
        </div>

    </div>

   
        </>
    )
}
export default breakfast;