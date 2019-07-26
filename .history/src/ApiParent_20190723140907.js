import React, {Component} from 'react';
import DisplayChildren from './DisplayChildren';

class ApiParent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log('[ApiParent.js] constructor');
  }

  render() {
    console.log('[ApiParent.js] render...');
    return (
      <div className='form'>
        <form>
          <label>select animal:</label>
          <select name='animal'>
            <option value='1'>Dog</option>
          </select>
          <label>Kg:</label>
          <input type='text' name='kg' value='0' placeholder='Kg' />
        </form>
      </div>
    );
  }
}

export default ApiParent;
