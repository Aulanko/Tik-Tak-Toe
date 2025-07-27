import { Link } from 'react-router-dom';

import './start.css'
import image from '../assets/image.png';

<img src={image} alt="..." />


const Start =  () =>{


    return(

        <div>

            <div className='start-container'>
                <img src={image} alt="" />
            </div>

            <div className='center-buttons'>
                <h1>Tic Tac Toe!</h1>
                <Link to='/app'>
                    <button>Play</button>
                </Link>
                
                <button>Settings</button>
            </div>

            
           



        </div>
    );
}



export default Start;