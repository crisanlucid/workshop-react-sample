import React, {Component} from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
      console.log('componentDidMount');
      this.timer = setInterval(() => {
          this.setState({
              date: new Date()
          })
      }, 1000);
  }

  componentDidUpdate(prevProps, preState) {
     console.log("New Change:", preState.date);
  }

  componentWillUnmount() {
      console.log('Component killed');
      clearInterval(this.timer);
  }

  render() {
      console.log('render...');
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
