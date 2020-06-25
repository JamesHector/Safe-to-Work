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
            <p>Tick the following boxes to confirm</p>
            <p>I confirm I do not have a high temperature<input
            name="temperature"
            type="checkbox"
            //checked={this.state.isGoing}
            //onChange={this.handleInputChange} 
            />
            </p>
            <p>I confirm I do not have new, continuous cough<input
            name="symptoms"
            type="checkbox"
            //checked={this.state.isGoing}
            //onChange={this.handleInputChange} 
            /></p>
            <p>I confirm that I do not have a loss or change to your sense of smell or taste<input
            name="smell"
            type="checkbox"
            /></p>
            
        </div>
    )
    
};

export default input;