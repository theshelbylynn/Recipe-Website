import home from './images/home-icon.png';
import search from './images/search-icon.png';
import recipe from './images/recipe-icon.png';
import account from './images/account-icon.png';
import video from './images/video-icon.png';


function Nav() {
    return(
        <>

        <div className="nav-container">


        <div className="nav-icon">
         <a id="link" href="/">
        <img id="icon" src={home} alt="home icon" />
        </a>   
        </div>

        <div className="nav-icon">
        <a id="link" href="/">
        <img id="icon" src={search} alt="search icon" />
        </a>
        </div>

        <div className="nav-icon">
        <a id="link" href="/RecipeBook">
        <img id="icon" src={recipe} alt="recipe book icon" />
        </a>
        </div>

        <div className="nav-icon">
        <a id="link" href="/">
        <img id="icon" src={account} alt="account icon" />
        </a>
        </div>

        <div className="nav-icon">
        <a id="link" href="/">
        <img id="icon" src={video} alt="video icon" />
        </a>
        </div>
     


        </div>

        </>
    );
}
export default Nav;