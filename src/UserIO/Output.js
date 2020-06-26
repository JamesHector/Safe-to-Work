import React from 'react';

import './Output.css';

const output = (props) => {
    return (
        <div className="Output">
            <p onClick={props.click}>I confirm that {props.name} is entering these details and they are correct on {props.date}.</p>
                        
        </div>
    )
    
};

export default output;