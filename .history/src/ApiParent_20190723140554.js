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
    return <div>
      <input type="text" name=""
    </div>;


  }
}

export default ApiParent;
