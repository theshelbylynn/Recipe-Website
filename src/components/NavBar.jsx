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
        <center><img id="icon" src={home} alt="home icon" /></center>
        </a>   
        </div>

        <div className="nav-icon">
        <a id="link" href="/">
        <center><img id="icon" src={search} alt="search icon" /></center>
        </a>
        </div>

        <div className="nav-icon">
        <a id="link" href="/RecipeBook">
       <center> <img id="icon" src={recipe} alt="recipe book icon" /></center>
        </a>
        </div>

        <div className="nav-icon">
        <a id="link" href="/">
        <center><img id="icon" src={account} alt="account icon" /></center>
        </a>
        </div>

        <div className="nav-icon">
        <a id="link" href="/TutorialPage">
        <center><img id="icon" src={video} alt="video icon" /></center>
        </a>
        </div>
     


        </div>

        </>
    );
}
export default Nav;