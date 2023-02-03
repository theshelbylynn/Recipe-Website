import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'


function tutorial2() {
    return(
        <>

       <div className="page-title">
        <h1>Cooking Tutorial</h1>
        <div className="divider"></div>
       </div>

        <div className="tutorial-container">
            <h2>Bacon Guacamole Balls</h2>
            
            <div className="tutorial-video">
            <iframe id="tut-video"  width="640" height="360" src="https://www.youtube.com/embed/hi7hBUZtT8E" title="Streaky Bacon Guacamole Pops | D'Orsogna Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
12 slices bacon, cooked and crumbled <br/>
2 avocados, pitted, peeled, and mashed <br/>
6 oz. cream cheese, softened<br/>
Juice of 1 lime<br/>
1 garlic clove, minced<br/>
1/4 red onion, minced<br/>
1 small jalapeno (seeded if you prefer less heat), chopped<br/>
2 tbsp. freshly chopped cilantro<br/>
1/2 tsp. cumin<br/>
1/2 tsp. chili powder<br/>
Kosher salt<br/>
Freshly ground black pepper
</p>
</div>

<div id="divide-border" className="direction-section">

<div className="section-header">
<h3>Instructions</h3>
</div>

<p>
<h4>Step One :</h4>
In a large bowl, combine all guacamole ingredients. Stir until mostly smooth (some chunks are OK) and season with salt and pepper. Place in the refrigerator to firm up slightly, 30 minutes. <br/>

<h4>Step Two :</h4>
Place crumbled bacon on a large plate. Using a small cookie scoop, scoop guacamole mixture and place in bacon. Roll to coat in bacon. Repeat until all guacamole and bacon is used. Store in refrigerator.<br/>
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

        </div>
        
        </>
    )
}
export default tutorial2;