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
            <h2>Olive Salad</h2>
            
            <div className="tutorial-video">
          
            <iframe id="tut-video" width="822" height="462" src="https://www.youtube.com/embed/mBD8teXKuW4" title="Green olive salad full recipe for boxing day recipe Chef Ricardo Juice Bar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
5 sweet cherry peppers (sliced and seeded) <br/>
2 cloves garlic (minced)<br/>
1 cup Castelvetrano olives (pitted and chopped)<br/>
3/4 cup Spanish olives (pimento removed)<br/>
1/2 cup roasted piquillo peppers/red pepper (diced)<br/>
3/4 cup black olives (chopped)<br/>
3 tablespoons capers (drained)<br/>
1/4 cup olive oil<br/>
1/4 cup red wine vinegar<br/>
1 tablespoon oregano<br/>
1/2 teaspoon salt<br/>
</p>

</div>

<div id='divide-border' className="direction-section">


<div className="section-header">
<h3>Instructions</h3>
</div>
<br/>
<p>
Make sure all items are chopped fine and combine.<br/>
Store in the fridge until ready to use. Because the olive oil solidifies in the fridge, set out about 5 minutes before you plan on serving!

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