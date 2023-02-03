import spinach from './images/spinach-avocado.png'
import panza from './images/panzanella.png'
import greek from './images/greek-peppers.png'
import arrows from './images/arrows.png'


function veggies() {
    return(
        <>

<div className="page-title">
            <h1>Chapter : Vegetables</h1>
            <div className="divider"></div>
        </div>


    <div className="chapter-container">
        
    <div className="chapter-section">

            <div className="section-image">
            <img id="suggest-img" src={spinach} alt="fruit salad" />
            </div>

            <div className="section-text">
            <h2>Spinach & Avocado Toast</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at numquam iure, molestiae ipsum amet commodi voluptatibus assumenda nulla animi dicta! Architecto cupiditate delectus dolore aperiam! Consectetur debitis aperiam nostrum.</p>

            <div className='recipe-button'>
            <button id='recipe-button'>See Recipe</button>
            </div>
            </div>
            
    </div>

    <div className="chapter-section">

        <div className="section-image">
        <img id="suggest-img" src={panza} alt="Rainbow Panzanella Salad" />
            </div>

            <div className="section-text">
            <h2>Rainbow Panzanella Salad</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at numquam iure, molestiae ipsum amet commodi voluptatibus assumenda nulla animi dicta! Architecto cupiditate delectus dolore aperiam! Consectetur debitis aperiam nostrum.</p>
            
            <div className='recipe-button'>
            <button id='recipe-button'>See Recipe</button>
            </div>
            </div>
    </div>


    <div className="chapter-section">

            <div className="section-image">
            <img id="suggest-img" src={greek} alt="Greek Stuffed Peppers" />
            </div>

            <div className="section-text">
                <h2>Greek Stuffed Peppers</h2>
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
export default veggies;