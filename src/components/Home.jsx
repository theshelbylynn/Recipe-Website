import veggie from './images/veggie-pasta.png';
import salmon from './images/salmon-salad.png';
import meatballs from './images/meatballs.png';
import olive from './images/olive-salad.png';

function Home() {
    return(
        <>
        <div className="page-title">
            <h1>Recipes</h1>
            <div className="divider"></div>
        </div>
    <div className="home-container">

        <div className="filter-button">
            Filter <i class="fa-sharp fa-solid fa-angle-down"></i>
        </div>

        <div className="search">
        <input id="search-input" type="search"></input> <br />

       <a href="/ResultPage"><button id="search-button">Search</button></a>
        </div>

        <div className="suggestion-container">

        <a id="card-link" href="/Recipe-1">
        <div className="suggestion-card">
        <img id="suggest-img" src={veggie} alt="veggie pasta" />
        <div className='suggest-title'>
            Veggie Pasta
        </div>
        </div></a>

        <a id="card-link" href="/Recipe-4">
        <div className="suggestion-card">
        <img id="suggest-img" src={salmon} alt="salmon salad" />
        <div className='suggest-title'>
            Salmon Salad
        </div>
        </div>
        </a>

        <a id="card-link" href="/Recipe-2">
        <div className="suggestion-card">
        <img id="suggest-img" src={meatballs} alt="veggie pasta" />
        <div className='suggest-title'>
            Baked Meatballs
        </div>
        </div>
        </a>

        <a id="card-link" href="/Recipe-5">
        <div className="suggestion-card">
        <img id="suggest-img" src={olive} alt="olive salad" />
        <div className='suggest-title'>
            Olive Salad
        </div>
        </div>
        </a>
      

        </div>

    </div>
        </>
    );
}

export default Home;