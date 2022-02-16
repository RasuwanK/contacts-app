import React from 'react';
import Label from './Label';

import './styles/app.css';

const App = () => {
    return (
        <div className='main'>
            <div className='app'>
                <div className='navbar'>
                    <h1 className='title'>Contacts</h1>
                </div>
                <div className='contacts'>
                    <Label name={{first:"Rasuwan",second:"Kalhara"}} />
                    <Label name={{first:"Judd",second:"Vinnet"}} />
                </div>
            </div>
        </div>
    )
}

export default App;