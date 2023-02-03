import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'


function tutorial4() {
    return(
        <>

       <div className="page-title">
        <h1>Cooking Tutorial</h1>
        <div className="divider"></div>
       </div>

        <div className="tutorial-container">
            <h2>Greek Stuffed Peppers</h2>
            
            <div className="tutorial-video">
            <iframe id="tut-video" width="640" height="360" src="https://www.youtube.com/embed/zWQfnEw0Ti0" title="Gemista: Greek Stuffed Tomatoes & Peppers Classic Comfort Food" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

6 bell peppers <br/>
1 tbsp. extra-virgin olive oil<br/>
1 lb. chicken breast<br/>
1 tsp. dried oregano<br/>
kosher salt<br/>
Freshly ground black pepper<br/>
1 1/2 c. low-sodium chicken broth (or water), divided<br/>
1 c. couscous<br/>
1 small red onion, chopped<br/>
1 clove garlic, minced<br/>
1 c. crumbled feta, divided, plus more for sprinkling<br/>
1 zucchini, chopped<br/>
1 c. quartered cherry tomatoes<br/>
1/2 c. kalamata olives, chopped<br/>
2 tbsp. chopped dill<br/>
Lemon wedges, for serving
</p>
</div>

<div id="divide-border" className="direction-section">

<div className="section-header">
<h3>Instructions </h3>
</div>
<p>
<h4>Step 1</h4>
Preheat oven to 350º. Slice off the top of each bell pepper. Discard stems and remove ribs and seeds from peppers. Place peppers upright in a large casserole dish.
<h4>Step 2</h4>
In a large skillet over medium heat, heat oil. Add chicken and season with oregano, salt and pepper. Cook until chicken is golden and no longer pink, 8 minutes per side. Transfer to a cutting board and let rest 5 minutes, then dice.
<h4>Step 3</h4>
In a medium saucepan over medium-high heat, add 1 cup chicken stock. Bring to a boil then remove pan from heat. Stir in couscous then cover the pan with a tight-forming lid until the couscous is tender and all of the liquid has been absorbed, about 5 minutes.
<h4>Step 4</h4>
In a large bowl, combine cooked couscous, red onion, garlic, 1/2 cup feta, zucchini, tomatoes and olives. Season mixture with salt and pepper.
<h4>Step 5</h4>
Stuff couscous mixture into peppers and sprinkle tops with remaining 1/2 cup feta. Pour remaining 1/2 cup chicken broth into baking dish (to help the peppers steam) and cover with foil. Bake until peppers are tender and the cheese is melty, 42 to 45 minutes. Squeeze lemon juice over cooked peppers and serve immediately.
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
export default tutorial4;