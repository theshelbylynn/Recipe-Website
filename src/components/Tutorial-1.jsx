import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'


function tutorial1() {
    return(
        <>

       <div className="page-title">
        <h1>Cooking Tutorial</h1>
        <div className="divider"></div>
       </div>

        <div className="tutorial-container">
            <h2>Fruit Salad</h2>
            
            <div className="tutorial-video">
            <iframe id="tut-video" width="640" height="360" src="https://www.youtube.com/embed/Zp-F68Fa-ps" title="HOW TO MAKE THE BEST FRUIT SALAD | easy recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='socials'>
            <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
            <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
            <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>

        <div className="directions">
    <div className="direction-section">
<div className="section-header">
<h3>Ingredients </h3>
</div>
<br/>
<p>
1 cantaloupe, peeled and cut into bite-sized pieces<br/>
2 mangoes, peeled and cut into bite-sized pieces<br/>
2 cups red grapes, sliced in half<br/>
5-6 kiwis, peeled and cut into bite-sized pieces<br/>
16 ounces strawberries, cut into bite-sized pieces<br/>
1 pineapple, peeled and cut into bite-sized pieces<br/>
1 cup blueberries</p>

<p>
<h3>Honey Lime Dressing</h3>
1/2 teaspoon lime zest<br/>
3 tablespoons lime juice<br/>
1 tablespoon honey<br/>
</p>

</div>

<div id="divide-border" className="direction-section">
    <div className="section-header">
<h3>Instructions </h3>
</div>
<br/>
<p>
Combine all the prepared fruit in a large glass bowl.

Combine lime zest, lime juice, and honey in a small bowl or spouted cup. Mix well
Pour the honey-lime dressing over the fruit and gently stir to combine. Serve and enjoy!
</p>

<p>
<h3>Notes :</h3>
This fruit salad will last in the fridge for 3-5 days when stored in an airtight container.

Use this recipe as a blueprint and sub in whatever fruits you have on hand.  

When possible, choose fruits that are local and in season for the best flavor.
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
export default tutorial1;