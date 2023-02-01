import olive from './images/olive-salad.png'
import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'

function Five() {
    return(
        <>
        <div className="recipe-container">


        <div className="recipe-image">
        <img id="recipe-img" src={olive} alt="Olive Salad" />

        <div className='socials'>
        <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
        <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
        <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>
        </div>


        <div className="recipe-details">

            <h2>Olive Salad</h2>
            <center><div className='divider'></div></center>

            <h3>Ingredients:</h3>

            <p>
           1. (1) cup chopped black and green olives <br/>
           2. (1/2) cup chopped roasted red peppers<br/>
           3. (1/4) cup chopped Giardiniera<br/>
           4. (1/4) cup chopped red onion<br/>
           5. (2) garlic cloves, minced<br/>
           6. (1) tablespoon chopped fresh parsley<br/>
           7. (1/4) cup olive oil<br/>
           8. (3) tablespoons red wine vinegar<br/>
           9. (9) teaspoon dried oregano<br/>
           10. (1/2) teaspoon dried basil<br/>
           11. (1/4) teaspoon black pepper
            pinch of salt<br/>

            </p>

        </div>
        </div>

        <div className='recipe-container-two'>

        <div className='tutorial-section'>

        <h2>Cooking Tutorial :</h2>
        <div className='divider'></div>

        <iframe id="video" width="450" height="250" src="https://www.youtube.com/embed/vaoQqqt3Ie0" title="How to Make Olive Salad for Muffaletta" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <a href="https://spicysouthernkitchen.com/olive-salad/" target="_blank" rel="noopener noreferrer"><button id="tutorial-button">Full Tutorial</button></a>
        </div>


        <div className='review-section'>

        <h2>Reviews :</h2>
        <div className='divider'></div>


        <div className='review'>
        <img src={one} alt="Reviewer One" />
        <p>“My family loved this recipe!”</p>
        </div>


        <div className='review'>
        <img src={two} alt="Reviewer Two" />
        <p>“Easy, fast and tasty!”</p>
        </div>


        <div className='review'>
        <img src={three} alt="Reviewer Three" />
        <p>“I absolutely adore this app!”</p>
        </div>

        </div>

       
        </div>

        <div className='review-cta'>
            <h1>Have you tried this recipe?</h1>
            <button>Leave a Review</button>
        </div>
        </>
    );
}

export default Five;