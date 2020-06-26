import React from 'react';

const input = (props) => {
    const inputStyle = {
        border: '1px solid black',
        padding: '5px',
        margin: '5px'
    };

    return (
        <div className="Output">
            <p> Input your first and last name 
                <input 
                type="text" 
                style={inputStyle}
                onChange={props.changed} 
                value={props.currentName}/></p>
            
            <p>I confirm I do not have a high temperature, a new continuous cough or a loss or change to my sense of smell or taste</p>
            
        </div>
    )
    
};

export default input;