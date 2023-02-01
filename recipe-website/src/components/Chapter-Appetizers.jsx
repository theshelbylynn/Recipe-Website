import caviar from './images/cowboy-caviar.png'
import guac from './images/bacon-guac.png'
import fetta from './images/cranberry-fetta.png'
import arrows from './images/arrows.png'


function appetizers() {
    return(
        <>

<div className="page-title">
            <h1>Chapter : Appetizers</h1>
            <div className="divider"></div>
        </div>


    <div className="chapter-container">
        
    <div className="chapter-section">

            <div className="section-image">
            <img id="suggest-img" src={caviar} alt="Cowboy Caviar" />
            </div>

            <div className="section-text">
            <h2>Cowboy Caviar</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at numquam iure, molestiae ipsum amet commodi voluptatibus assumenda nulla animi dicta! Architecto cupiditate delectus dolore aperiam! Consectetur debitis aperiam nostrum.</p>

            <></>
            <div className='recipe-button'>
            <button id='recipe-button'>See Recipe</button>
            </div>
            </div>
            
    </div>

    <div className="chapter-section">

        <div className="section-image">
        <img id="suggest-img" src={guac} alt="Bacon Guacamole Balls" />
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
            <img id="suggest-img" src={fetta} alt="Cranberry Fetta Dip" />
            </div>

            <div className="section-text">
                <h2>Cranberry Fetta Dip</h2>
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
export default appetizers;