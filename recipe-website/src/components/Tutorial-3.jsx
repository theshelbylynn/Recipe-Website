import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'


function tutorial3() {
    return(
        <>

       <div className="page-title">
        <h1>Cooking Tutorial</h1>
        <div className="divider"></div>
       </div>

        <div className="tutorial-container">
            <h2>Rainbow Panzanella</h2>
            
            <div className="tutorial-video">
            <iframe id="tut-video" width="640" height="360" src="https://www.youtube.com/embed/HPzeV2t82sY" title="PANZANELLA SALAD | TUSCAN BREAD AND TOMATO SALAD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='socials'>
            <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
            <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
            <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>

        <div className="directions">
        <div className="direction-section">

        <div className="section-header">
        <h3>Ingredients :</h3>
        </div>
<p>
<br/>
2 medium red beets, tops removed, scrubbed <br/>
1 acorn squash<br/>
1/2 c. plus 2 tbsp. extra-virgin olive oil, divided<br/>
3 tbsp. pure maple syrup, divided
Kosher salt<br/>
Freshly ground black pepper<br/>
8 oz. sourdough bread, cut or torn into 1" cubes<br/>
1/2 c. grapefruit juice<br/>
1 clove garlic, grated<br/>
1 tbsp. chopped fresh thyme<br/>
1 tsp. Dijon mustard<br/>
1 scallion, green and white parts separated, finely chopped<br/>
1 c. fresh parsley leaves<br/>
1 c. pomegranate seeds<br/>
1 c. large red grapefruit<br/>
8 oz. blue cheese, crumbled
</p>
</div>  

<div id="divide-border"  className="direction-section">
    <div className="section-header">
<h3>Instructions :</h3>
</div>
<p>
<h4>Step 1</h4>
Arrange racks in upper and lower thirds of oven; preheat to 400°. Wrap beets in foil, place in a baking dish, and roast on top rack, checking for doneness after 1 hour, until tender enough to easily pierce with a paring knife, about 1 hour and 30 minutes total. Let cool until cool enough to handle, then rub outsides with a paper towel or clean dish towel to peel. Cut into 3/4" pieces.
<h4>Step 2</h4>
Meanwhile, slice top off squash, then cut in half lengthwise. Slice into 1/4" half-moons, then cut each half-moon into 2 pieces. Transfer squash to a large bowl. Add 1 tablespoon oil, 1 tablespoon syrup, 1/2 teaspoon salt, and a pinch of pepper and toss until coated. Spread on a parchment-lined baking sheet.
<h4>Step 3</h4>
Bake squash on bottom rack, tossing halfway through, until tender, about 20 minutes. Let cool.
<h4>Step 4</h4>
Reduce oven temperature to 325°. In a large bowl, toss bread, 3 tablespoons oil, 1/2 teaspoon salt, and a pinch of pepper. Spread on a parchment-lined baking sheet.
<h4>Step 5</h4>
Bake bread, turning cubes halfway through, until golden brown and crisp, about 25 minutes. Let cool slightly.
<h4>Step 6</h4>
Meanwhile, in a small bowl, whisk grapefruit juice, garlic, thyme, mustard, 1 tablespoon white scallion parts, 3/4 teaspoon salt, and remaining 2 tablespoons syrup until well blended. Slowly whisk in remaining 6 tablespoons oil until dressing is smooth.
<h4>Step 7</h4>
In a large bowl, toss squash, croutons, parsley, pomegranate seeds, green scallion parts, 1/2 cup dressing, and a pinch of salt. In a small bowl, toss beets with 1/4 cup dressing.
<h4>Step 8</h4>
Trim peel from top and bottom of grapefruit. Stand grapefruit upright, then slice peel away from flesh from top to bottom, following the curve of the fruit. Hold peeled grapefruit in your palm and slice between flesh and membrane of each segment to release segments.
<h4>Step 9</h4>
Transfer squash mixture to a platter. Top with beets, blue cheese, and grapefruit segments. Serve with remaining dressing alongside.
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
export default tutorial3;