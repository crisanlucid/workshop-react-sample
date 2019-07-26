import React, {Component} from 'react';
import DisplayChildren from './DisplayChildren';

class ApiParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSatelite: {
        longitude: 0,
        latitude: 0,
      },
      forceUpdate: false,
      title: '',
    };

    console.log('[ApiParent.js] constructor');

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    // console.log('Later....')
    //update the state;
    this.setState({
      forceUpdate: true,
    });
  }

  componentDidMount() {
    console.log('[ApiParent.js] componentDidMount');

    this.updateLocation();
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[ApiParent.js] getDerivedStateFromProps');
    console.log('props', props);
    console.log('state', state);

    if (props.title !== state.title) {
      return {
        title: props.title,
      };
    }
  }

  componentWillUnmount() {}

  updateLocation = async (newState = {}) => {
    try {
      let response = await fetch('http://api.open-notify.org/iss-now.json');

      let data = await response.json();

      this.setState({
        locationSatelite: data.iss_position,
        ...newState,
      });

      console.log('state', this.state);
    } catch (error) {
      console.log('error 1', error);
    }
  };

  async componentDidUpdate(nextProps) {
    console.log('[ApiParent.js] componentDidUpdate');
    console.log('locationSatelite', this.state.locationSatelite);
    if (this.state.forceUpdate) {
      this.updateLocation({
        forceUpdate: false,
      });
    }
  }

  render() {
    console.log('[ApiParent.js] render...');
    return (
      <div>
        <h1>Parent API</h1>
        <DisplayChildren
          onClickHandler={this.onClickHandler}
          location={this.state.locationSatelite}
        />
      </div>
    );
  }
}

export default ApiParent;
