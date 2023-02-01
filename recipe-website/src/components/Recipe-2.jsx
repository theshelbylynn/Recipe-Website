import meatballs from './images/meatballs.png'
import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'

function Two() {
    return(
        <>
        <div className="recipe-container">


        <div className="recipe-image">
        <img id="recipe-img" src={meatballs} alt="baked meatballs" />

        <div className='socials'>
        <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
        <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
        <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>
        </div>


        <div className="recipe-details">

            <h2>Baked Meatballs</h2>
            <center><div className='divider'></div></center>

            <h3>Ingredients:</h3>

            <p>
          1.  (1 lb) lean ground beef <br/>
          2.  (1/2) cup Italian breadcrumbs<br/>
          3.  (1/4) cup fresh grated Parmesan cheese<br/>
          4.  (2) cloves garlic, minced<br/>
          5.  (1) tablespoon Olive Oil<br/>
          6.  (4-5) cloves Garlic minced<br/>
          7.  (2) tablespoons marinara sauce<br/>
          8.  (1) tablespoon chopped fresh rosemary, or dried<br/>
          9.  (1) tablespoon chopped fresh parsley, or dried<br/>
          10. (1) tablespoon chopped fresh basil, or dried<br/>
          11. (1/2) teaspoon kosher salt<br/>
          12. (1/4) teaspoon fresh cracked black pepper<br/>
          13. (1) teaspoon Pepper powder<br/>
          14. (1) teaspoon Italian seasoning<br/>
          15. (1) large egg, slightly beaten<br/>

            </p>

        </div>
        </div>

        <div className='recipe-container-two'>

        <div className='tutorial-section'>

        <h2>Cooking Tutorial :</h2>
        <div className='divider'></div>

        <iframe id="video" width="450" height="250" src="https://www.youtube.com/embed/p-RLAa43Ztw" title="How To Make Meatballs In The Oven (Italian Meatballs Recipe) - Tastylicious" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <a href="https://www.youtube.com/watch?v=p-RLAa43Ztw" target="_blank" rel="noopener noreferrer"><button id="tutorial-button">Full Tutorial</button></a>
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

export default Two;