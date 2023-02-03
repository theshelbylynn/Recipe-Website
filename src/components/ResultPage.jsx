import salmon from './images/salmon-salad.png'
import marinated from './images/marinated-salmon.png'
import meatballs from './images/meatballs.png'
import olive from './images/olive-salad.png'
import veggie from './images/veggie-pasta.png'
import arrows from './images/arrows.png'

function Result() {
    return(
        <>

        <div className="page-title">
            <h1>Results</h1>
            <div className="divider"></div>
        </div>
        

         <div className="result-container">


        <div className="filter-button">
            Filter <i class="fa-sharp fa-solid fa-angle-down"></i>
        </div>

        <div className="results">

            <div class="result-card">
                <a id="card-link" href="/Recipe-4">
            <img id="result-img" src={salmon} alt="salmon salad" />

                <h4>Salmon Salad</h4></a>

            <div className='keywords'>

            <button id="keyword">Salmon</button>
            <button id="keyword">Salads</button>
            <button id="keyword">Gluten Free</button>

            </div>

            </div>

            <div class="result-card">
            <a id="card-link" href="/Recipe-2">
            <img id="result-img" src={meatballs} alt="baked meatballs" />

            <h4>Baked Meatballs</h4></a>

            <div className='keywords'>

            <button id="keyword">Beef</button>
            <button id="keyword">Pasta</button>
            <button id="keyword">Baked</button>

            </div>
            </div>


            <div class="result-card">
            <a id="card-link" href="/Recipe-5">
            <img id="result-img" src={olive} alt="olive salad" />

            <h4>Olive Salad</h4></a>

            <div className='keywords'>

            <button id="keyword">Olives</button>
            <button id="keyword">Vegan</button>
            <button id="keyword">Salads</button>

            </div>

            </div>

            <div class="result-card">
            <a id="card-link" href="/Recipe-3">
            <img id="result-img" src={marinated} alt="marinated salmon" />

            <h4>Marinated Salmon</h4></a>

            <div className='keywords'>

            <button id="keyword">Marinated Dishes</button>
            <button id="keyword">Fish Dishes</button>
            <button id="keyword">Salmon</button>

            </div>

            </div>


            <div class="result-card">
            <a id="card-link" href="/Recipe-1">
            <img id="result-img" src={veggie} alt="Veggie Pasta" />

            <h4>Veggie Pasta</h4></a>

            <div className='keywords'>

            <button id="keyword">Pasta</button>
            <button id="keyword">White Sauce</button>
            <button id="keyword">Vegetarian</button>

            </div>

            </div>

        {/* ROW TWO */}

        <div class="result-card">
                <a id="card-link" href="/Recipe-4">
            <img id="result-img" src={salmon} alt="salmon salad" />

                <h4>Salmon Salad</h4></a>

            <div className='keywords'>

            <button id="keyword">Salmon</button>
            <button id="keyword">Salads</button>
            <button id="keyword">Gluten Free</button>

            </div>

            </div>

            <div class="result-card">
            <a id="card-link" href="/Recipe-2">
            <img id="result-img" src={meatballs} alt="baked meatballs" />

            <h4>Baked Meatballs</h4></a>

            <div className='keywords'>

            <button id="keyword">Beef</button>
            <button id="keyword">Pasta</button>
            <button id="keyword">Baked</button>

            </div>
            </div>


            <div class="result-card">
            <a id="card-link" href="/Recipe-5">
            <img id="result-img" src={olive} alt="olive salad" />

            <h4>Olive Salad</h4></a>

            <div className='keywords'>

            <button id="keyword">Olives</button>
            <button id="keyword">Vegan</button>
            <button id="keyword">Salads</button>

            </div>

            </div>

            <div class="result-card">
            <a id="card-link" href="/Recipe-3">
            <img id="result-img" src={marinated} alt="marinated salmon" />

            <h4>Marinated Salmon</h4></a>

            <div className='keywords'>

            <button id="keyword">Marinated Dishes</button>
            <button id="keyword">Fish Dishes</button>
            <button id="keyword">Salmon</button>

            </div>

            </div>


            <div class="result-card">
            <a id="card-link" href="/Recipe-1">
            <img id="result-img" src={veggie} alt="Veggie Pasta" />

            <h4>Veggie Pasta</h4></a>

            <div className='keywords'>

            <button id="keyword">Pasta</button>
            <button id="keyword">White Sauce</button>
            <button id="keyword">Vegetarian</button>

            </div>

            </div>

        </div>

        <img src={arrows} alt="back and next arrows" />

        </div>

        </>
    );
}
export default Result;