import marinated from './images/marinated-salmon.png'
import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'

function Three() {
    return(
        <>
        <div className="recipe-container">


        <div className="recipe-image">
        <img id="recipe-img" src={marinated} alt="marinated salmon" />

        <div className='socials'>
        <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
        <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
        <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>
        </div>


        <div className="recipe-details">

            <h2>Marinated Salmon</h2>
            <center><div className='divider'></div></center>

            <h3>Ingredients:</h3>

            <p>
           1. (4) salmon fillets 4-6 ounces each <br/>
           2. (4) tablespoons olive oil<br/>
           3. (1) 1/2 tablespoons honey<br/>
           4. (1) 1/2 tablespoons soy sauce<br/>
           5. (1) teaspoon lemon zest<br/>
           6. (2) teaspoons chopped fresh parsley<br/>
           7. (2) teaspoons fresh thyme leaves<br/>
           8. (1/2) teaspoon salt<br/>
           9. (1/4) teaspoon pepper<br/>
           10. (1/2) teaspoon minced garlic
            lemon wedges for serving<br/>

            </p>

        </div>
        </div>

        <div className='recipe-container-two'>

        <div className='tutorial-section'>

        <h2>Cooking Tutorial :</h2>
        <div className='divider'></div>

        <iframe id="video" width="450" height="250" src="https://www.youtube.com/embed/vAziD9FWF08" title="Easy Honey Garlic Salmon | Step by step salmon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <a href="https://www.dinneratthezoo.com/marinated-salmon/" target="_blank" rel="noopener noreferrer"><button id="tutorial-button">Full Tutorial</button></a>
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

export default Three;