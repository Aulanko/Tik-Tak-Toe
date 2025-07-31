import { Link } from 'react-router-dom';

import './start.css'
import image from '../assets/image.png';
import { useState } from 'react';

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
                    Hello there!
                </h1>
                <Link to='/app'>
                    <button>Play against a friend</button>
                </Link>
                
            </div>:''    
        }

            <div className='center-buttons'>
                <h1>Tic Tac Toe!</h1>
                
                    <button onClick={handleClick}>Play</button>
               
                
                <button>Settings</button>
            </div>

            
           



        </div>
    );
}



export default Start;