import React from 'react';

import './Output.css';

const output = (props) => {
    return (
        <div className="Output">
            <p onClick={props.click}>I confirm that {props.name} is entering these details and they are correct on {props.calendar}.</p>
            <p>If you have any of the main symptoms of coronavirus: </p>
            <li>Stay at home (self-isolate) – do not leave your home or have visitors. Anyone you live with, and anyone in your support bubble, must also self-isolate.</li>
            <li>Get a test – get a test to check if you have coronavirus as soon as possible. Anyone you live with, and anyone in your support bubble, should also get a test if they have symptoms.</li>
            
        </div>
    )
    
};

export default output;