import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
          location: 'Berlin'
        };
      
    }

    onChangeHandler = (event) => {
        event.preventDefault();

        console.log(event.currentTarget.name, event.currentTarget);
        this.setState({
            location: event.currentTarget.value
        })
    }

    onClickHandler = (event, id) => {
        event.preventDefault();
        
        this.setState({
          location: 'Saved',
        });
        console.log('click...');
        console.log('id', id);
    }

    render() {
        console.log('[Parent.js] render...');
        return (
          <div>
            <h1>Parent Title</h1>
            <ChildComponent
              onChangeHandler={this.onChangeHandler}
              onClickHandler={this.onClickHandler}
              location={this.state.location}
              {...this.state}
            />
          </div>
        );
    }
}

export default ParentComponent;