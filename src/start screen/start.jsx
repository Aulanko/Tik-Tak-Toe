import { Link } from 'react-router-dom';

import './start.css'
import image from '../assets/image.png';
import { useState } from 'react';
import vsHumanGif from '../assets/giphy_tiktak.gif'
import vsAIGif from '../assets/giphy_vs_ai.gif'

<img src={image} alt="..." />


const Start =  () =>{

    const [versus, setVersus] = useState(false)

    const handleClick = () =>{
        setVersus(true)
    }

    const handleClose = () =>{
        setVersus(false)
    }


    return(

        <div>

            <div className='start-container'>
                <img src={image} alt="" />
            </div>

            {versus?
            <div className='versus-modal'>
                <span onClick={handleClose} className='close-modal'>&times;</span>
                <h1>
                    Choose your game
                </h1>
                <div className='game-select-container'>
                  
                        <Link to='/app'>
                            <button className="gif-button" style={{ backgroundImage: `url(${vsHumanGif})` }}>
                                Play against a friend
                            </button>
                        </Link>

                        <Link to='/bot_easy'>
                            <button className="gif-button" style={{ backgroundImage: `url(${vsAIGif})` }}>
                                Play against AI
                            </button>

                        </Link>
                        

                   
                </div>
                
                
            </div>:
            <div className='center-buttons'>
                <h1>Tic Tac Toe!</h1>
                
                    <button onClick={handleClick}>Play</button>
               
                
                <button>Settings</button>
            </div>    
        }

            

            
           



        </div>
    );
}



export default Start;