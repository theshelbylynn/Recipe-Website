import salmon from './images/salmon-salad.png'
import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'

function Four() {
    return(
        <>
        <div className="recipe-container">


        <div className="recipe-image">
        <img id="recipe-img" src={salmon} alt="marinated salmon" />

        <div className='socials'>
        <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
        <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
        <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>
        </div>


        <div className="recipe-details">

            <h2>Salmon Salad</h2>
            <center><div className='divider'></div></center>

            <h3>Ingredients:</h3>

            <p>
           1. (2-4) oz salmon fillets <br/>
           2. (1) Tablespoon avocado oil <br/>
           3. (sea salt and pepper, to taste) <br/>
           4. (4) cups baby kale + romaine, or spring mix<br/>
           5. (2) cups sweet potato croutons<br/>
           6. (½) avocado, sliced<br/>
           7. (¼) cup pickled red onions<br/>
           8. (¼) cup crumbled feta<br/>
           9. (2) Tablespoons pepitas
                Lemon vinaigrette dressing<br/>

            </p>

        </div>
        </div>

        <div className='recipe-container-two'>

        <div className='tutorial-section'>

        <h2>Cooking Tutorial :</h2>
        <div className='divider'></div>

        <iframe id="video" width="450" height="250" src="https://www.youtube.com/embed/AfwnhsEd5rY" title="Superfood Salmon Salad | Bonefish Grill Copycat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <a href="https://www.eatingbirdfood.com/salmon-salad/" target="_blank" rel="noopener noreferrer"><button id="tutorial-button">Full Tutorial</button></a>
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

export default Four;