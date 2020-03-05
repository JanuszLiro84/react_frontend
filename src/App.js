import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart/Chart';

class App extends Component {
  state = {
    deals: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/deals')
    .then(res => res.json())
    .then((data) => {
      this.setState({ deals: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <div>
          <Chart deals={this.state.deals}/>
        </div>
      </div>
    );
  }
}

export default App;
