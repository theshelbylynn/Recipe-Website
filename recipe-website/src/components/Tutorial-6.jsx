import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'


function tutorial6() {
    return(
        <>

       <div className="page-title">
        <h1>Cooking Tutorial</h1>
        <div className="divider"></div>
       </div>

        <div className="tutorial-container">
            <h2>Eggs, Spinach & Avocado Toast</h2>
            
            <div className="tutorial-video">
          
            <iframe id="tut-video" width="640" height="360" src="https://www.youtube.com/embed/7z96ide2-no" title="Avocado Toast With Egg | Fried, Scrambled, Boiled & Poached" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>

            <div className='socials'>
            <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
            <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
            <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>

        <div className="directions">
          
          
<div className="direction-section">
<div className="section-header">
<h3>Ingredients</h3>
</div>
<br/>
<p>
1 Egg <br/>
2 Gluten-free toasts <br/>
1 Medium ripe avocado<br/>
10 Spinach leaves (approx.) <br/>
1 Pinch of Himalayan salt <br/>
1 Pinch of Garlic powder <br/>
</p>

</div>

<div id='divide-border' className="direction-section">


<div className="section-header">
<h3>Instructions</h3>
</div>
<p>
<h4>Step 1</h4>
Slice the avocado in half, smash it with a fork. It doesn’t have to be perfect or lump-free.
<h4>Step 2</h4>
Add the Himalayan salt and the garlic powder to taste.
Spread the mix on the toast and add the spinach (wash well before consumption).

</p>
</div>
        </div>

        <div className="tut-review-container">

        <h1>Reviews :</h1>
        <div className="divider"></div>

        <div className="tut-review">

        <div className="tut-review-section">
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

        <div className="tut-review-section">
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
            
        </div>

        <div className='review-cta'>
            <h1>Have you tried this recipe?</h1>
            <button>Leave a Review</button>
        </div>

        </div>
        
        </>
    )
}
export default tutorial6;