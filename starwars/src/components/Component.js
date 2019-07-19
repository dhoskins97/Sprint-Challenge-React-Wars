import React from 'react';



const Component = (props) => {

    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.gender}</p>
            <p>{props.weight}</p>
        </div>
    )
};

export default Component;