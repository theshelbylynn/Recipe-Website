import veggie from './images/veggie-pasta.png'
import one from './images/reviewer-1.png'
import two from './images/reviewer-2.png'
import three from './images/reviewer-3.png'

function One() {
    return(
        <>
        <div className="recipe-container">


        <div className="recipe-image">
        <img id="recipe-img" src={veggie} alt="veggie pasta" />

        <div className='socials'>
        <i id="social-icon" class="fa-brands fa-facebook fa-3x"></i>
        <i id="social-icon" class="fa-brands fa-pinterest fa-3x"></i>
        <i id="social-icon"  class="fa-solid fa-share-nodes fa-3x"></i>
        </div>
        
        </div>

        <div className="recipe-details">

            <h2>Veggie Pasta</h2>
            <center><div className='divider'></div></center>

            <h3>Ingredients:</h3>

            <p>
          1.  (150 grams) Dried Pasta Macaroni /Penne /Fusilli / Orecchiette / Rigatoni <br/>
          2.  (2) tablespoon Salt<br/>
          3.  (5) cups Water<br/>
          4.  (2) tablespoon Butter<br/>
          5.  (1) tablespoon Olive Oil<br/>
          6.  (4-5) cloves Garlic minced<br/>
          7.  (1) cup Onion diced<br/>
          8.  (½) cup Broccoli florets<br/>
          9.  (6-7) Mushrooms halved<br/>
          10.  (½) cup Corn Kernels<br/>
          11.  (1) cup Bell Peppers cubed (colored)<br/>
          12.  (1) teaspoon Salt<br/>
          13.  (1) teaspoon Pepper powder<br/>
          14.  (1) teaspoon Italian seasoning<br/>
          15.  (2) tablespoons All Purpose Flour<br/>
          16.  (2) cups Milk<br/>
          17.  (½) cup Cream<br/>
          18.  (1) cup Mozzarella grated<br/>
          19.  (1) teaspoon Dijon Mustard optional<br/>
          20.  (2) tablespoon Basil shredded<br/>
            </p>

        </div>
        </div>

        <div className='recipe-container-two'>

        <div className='tutorial-section'>

        <h2>Cooking Tutorial :</h2>
        <div className='divider'></div>

        <iframe id="video" width="450" height="250" src="https://www.youtube.com/embed/oIgxLno3LnY" title="Vegetarian White Sauce Pasta" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <a href="https://myfoodstory.com/white-sauce-pasta-recipe/" target="_blank" rel="noopener noreferrer"><button id="tutorial-button">Full Tutorial</button></a>
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

export default One;