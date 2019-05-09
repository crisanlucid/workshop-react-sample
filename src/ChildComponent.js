import React from 'react';

const ChildComponent = ({onChangeHandler, onClickHandler, location}) => {
  console.log('[Child.js] render...');
  const id = 202;
  return (
    <div>
      <h2>Child Area</h2>
      <input
        type='text'
        name='location'
        value={location}
        placeholder='berlin'
        onChange={onChangeHandler}
      />
      <button onClick={e => onChangeHandler(e, id)}> Find</button>
    </div>
  );
};

export default ChildComponent;