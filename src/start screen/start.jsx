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
                    <div className='vshuman-container'>
                        <h1>Human</h1>
                        <div className='versus-img-container'>
                            <img src={vsHumanGif} alt="" />
                        </div>
                        <Link to='/app'>
                            <button>Play against a friend</button>
                        </Link>
                        
                    </div>
                    <div className='vsai-container'>
                        <h1>AI</h1>
                        <div className='versus-img-container'>
                            <img src={vsAIGif} alt="" />
                        </div>
                        <button>Play against AI</button>
                    </div>
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