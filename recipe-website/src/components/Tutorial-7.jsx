import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'


function tutorial7() {
    return(
        <>

       <div className="page-title">
        <h1>Cooking Tutorial</h1>
        <div className="divider"></div>
       </div>

        <div className="tutorial-container">
            <h2>Cowboy Caviar</h2>
            
            <div className="tutorial-video">
          
            <iframe id="tut-video" width="640" height="360" src="https://www.youtube.com/embed/43hO0BaSjgI" title="The Best Cowboy Caviar Recipe - Texas Caviar Ever" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
<h4>FOR THE DRESSING:</h4>
1/3 c. extra-virgin olive oil <br/>
1/3 c. lime juice<br/>
3 tbsp. chopped fresh cilantro<br/>
1 tbsp. hot sauce (such as Cholula)<br/>
1/2 tsp. cumin<br/>
1 tsp. kosher salt<br/>

<h4>FOR THE SALAD:</h4>
1 c. black beans<br/>
1 small red onion, finely chopped<br/>
1 c. corn kernels<br/>
1 c. cherry tomatoes, quartered<br/>
1 c. black-eyed peas<br/>
2 orange bell peppers, chopped<br/>
1 avocado, chopped<br/>
Tortilla chips, for serving<br/>
</p>

</div>

<div id='divide-border' className="direction-section">


<div className="section-header">
<h3>Instructions</h3>
</div>
<p>
<h4>Step 1</h4>
In a small bowl, make dressing: Whisk together olive oil, lime juice, cilantro, hot sauce, cumin, and salt. Set aside.
<h4>Step 2</h4>
In a large bowl, combine remaining ingredients. Toss with dressing until well combined. Serve with chips.

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
export default tutorial7;