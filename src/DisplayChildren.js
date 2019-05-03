import React from 'react';

const DisplayChildren = (props) => {
    console.log(props);
    return (
      <div>
        <button onClick={props.handleClick}>Click me</button>
        <p>
          Longitude: {props.location.longitude} 
          Latitude: {props.location.latitude}
        </p>
      </div>
    );
}

export default DisplayChildren;