import React from 'react';



const Component = (props) => {

    return (

        <div className="compContainer">
            <h4 className="nameContainer">{props.name}</h4>
            <p className="genderContainer">Gender: {props.gender}</p>
            <p className="wtContainer"> Weight: {props.weight}kg</p>
        </div>
    )
};

export default Component;