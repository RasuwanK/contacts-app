import React from 'react';
import Label from './Label';

import './styles/app.css';

// Hello this is a comment

const contacts = [
    {first:'Rasuwan',second:'Kalhara'},
    {first:'Nethula',second:'Dulsara'},
    {first:'Nippl',second:'Pip'},
    {first:'Desmond',second:'Miles'}
]

const App = () => {
    return (
        <div className='main'>
            <div className='app'>
                <div className='navbar'>
                    <h1 className='title'>Contacts</h1>
                </div>
                <div className='contacts'>
                    {contacts.map((contact)=> {
                        return <Label name={contact} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default App;