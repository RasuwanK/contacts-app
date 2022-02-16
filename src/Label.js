import React from 'react';

const Label = (props) => {

    const setImage = (name) => {
        return  name.first[0].toUpperCase() + name.second[0].toUpperCase() 
    }

    const getFullName = (name) => {
        return name.first.concat(' ',name.second);
    }

    const getRandomColor = () => {
        const colors = [
            'rgb(255, 140, 0)',
            'rgb(153, 50, 204)',
            'rgb(139, 0, 0)',
            'rgb(143, 188, 143)',
            '#228B22',
            '#20B2AA'
        ];

        return colors[Math.floor(Math.random() * 5)];

    }

    return (
        <div className='label'>
            <div className='image'>
                <div className='circle' style={
                    {
                        width:'92px',
                        height:'92px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:getRandomColor(),
                        color:'#23232',
                        borderRadius:'100%',
                        marginTop:'auto',
                        marginBottom:'auto'
                }}>
                    {setImage(props.name)}
                </div>
            </div>
            <div className='name'>
                {getFullName(props.name)}
            </div>
        </div>
    )
}

export default Label;