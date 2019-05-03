import React, {Component} from 'react';
import DisplayChildren from './DisplayChildren';

class ApiParent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          locationSatelite: {
            longitude: 100,
            latitude: 50,
          },
        };
        //fetch api
        this.updateLocation();
        
        this.handleClick = this.handleClick.bind(this);
    }
        
    updateLocation() {
        fetch('http://api.open-notify.org/iss-now.json')
          .then(response => response.json())
          .then(data =>
            this.setState({
              locationSatelite: data.iss_position,
            }),
          )
          .catch(() => alert('error'));
    }

    handleClick() {
      this.updateLocation();
    }

    render() {
        return (
          <div>
            <h1>Parent API</h1>
            <DisplayChildren 
                handleClick={this.handleClick} 
                location= {this.state.locationSatelite}    
                />
          </div>
        );
    }
}

export default ApiParent;