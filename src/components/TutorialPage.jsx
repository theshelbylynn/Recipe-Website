import tut1 from './images/tutorial-1.png';
import tut2 from './images/tutorial-2.png';
import tut3 from './images/tutorial-3.png';
import tut4 from './images/tutorial-4.png';
import tut5 from './images/tutorial-5.png';
import tut6 from './images/tutorial-6.png';
import tut7 from './images/tutorial-7.png';
import tut8 from './images/tutorial-8.png';
import arrows from './images/arrows.png';

function tutorials() {
    return(
        <>

       <div className="page-title">
        <h1>Cooking Tutorials</h1>
        <div className="divider"></div>
       </div>

        <div className="tutorial-row">
      
        <a id="tutorial-a" href="/Tutorial-2">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut1} alt="Bacon Guacamole Balls" />
            </div>
            <h4>Bacon Guacamole Balls</h4>
        </div>
        </a>


             
        <a id="tutorial-a" href="/Tutorial-1">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut2} alt="salmon salad" />
            </div>
            <h4>Fruit Salad</h4>
        </div>
        </a>

        <a id="tutorial-a" href="/Tutorial-3">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut3} alt="salmon salad" />
            </div>
            <h4>Rainbow Panzanella</h4>
        </div>
        </a>

        <a id="tutorial-a" href="/Tutorial-4">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut4} alt="salmon salad" />
            </div>
            <h4>Greek Stuffed Peppers</h4>
        </div>
        </a>

        <a id="tutorial-a" href="/Tutorial-5">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut5} alt="salmon salad" />
            </div>
            <h4>Spinach Avocado Toast</h4>
        </div>
        </a>

        <a id="tutorial-a" href="/Tutorial-6">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut6} alt="salmon salad" />
            </div>
            <h4>Eggs & Spinach Avocado Toast</h4>
        </div>
        </a>

        <a id="tutorial-a" href="/Tutorial-7">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut7} alt="salmon salad" />
            </div>
            <h4>Cowboy Caviar</h4>
        </div>
        </a>

        <a id="tutorial-a" href="/Tutorial-8">
        <div className="tutorial-item">
            <div className="tut-img">
            <img id="suggest-img" src={tut8} alt="salmon salad" />
            </div>
            <h4>Olive Salad</h4>
        </div>
        </a>
            
        </div>

        <div className='arrows'>
        <img src={arrows} alt="back and next arrows" />
        </div>
        </>
    )
}
export default tutorials;