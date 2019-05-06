import React from 'react';

const DisplayChildren = (props) => {
    console.log(props);
    return (
      <div>
        <button onClick={props.onClickHandler}>Udate data!</button>
        <p>
          Longitude: {props.location.longitude}
          Latitude: {props.location.latitude}
        </p>
      </div>
    );
}

export default DisplayChildren;