import React, {Component} from 'react';
import DisplayChildren from './DisplayChildren';

class ApiParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: null,
      kg: 0,
      neuted: false,
    };

    console.log('[ApiParent.js] constructor');
  }

  onSubmitHandler = e => {
    e.preventDefault();
    const formFields = ['input', 'select'];
    // const formList = e.target.filter(elem => {
    //   console.log(elem);
    //   return elem;
    // });
    const formList = Array.from(e.target.children);
    debugger;
    console.log(e.target.value);
  };

  render() {
    console.log('[ApiParent.js] render...');
    return (
      <div className='form'>
        <form onSubmit={this.onSubmitHandler}>
          <label>select animal:</label>
          <select name='animal'>
            <option value='1'>Dog</option>
            <option value='2'>Cat</option>
          </select>
          <label>Kg:</label>
          <input type='text' name='kg' value='0' placeholder='Kg' />
          <input type='checkbox' name='neuted' value='0' />
          <button type='submit'>Calculate</button>
        </form>
        <h2>Calculate</h2>
        <input type='text' name='calc' value='0' placeholder='total calory' />
      </div>
    );
  }
}

export default ApiParent;
