import { Component } from 'react';
import './App.css';
import axios from 'axios';

interface responseItem {
  id: number;
  name: string;
  description: string;
}

class App extends Component {
  state = {
    beers: [],
    searchString: localStorage.getItem('searchString') || '',
  };
  componentDidMount(): void {
    this.search();
  }
  search() {
    const BASE_URL = 'https://api.punkapi.com/v2/beers/';
    const url = this.state.searchString
      ? `${BASE_URL}?beer_name=${this.state.searchString.replace(' ', '_')}`
      : BASE_URL;
    axios.get(url).then((res) => {
      this.setState({
        beers: res.data,
      });
    });
  }
  render() {
    return (
      <>
        <div>
          <input
            type="search"
            value={this.state.searchString}
            onChange={(event) =>
              this.setState({ searchString: event.target.value })
            }
          ></input>
          <button
            onClick={() => {
              localStorage.setItem('searchString', this.state.searchString);
              this.search();
            }}
          >
            🔍
          </button>
        </div>
        <div>
          {this.state.beers.map((item: responseItem) => (
            <div key={item.id.toString()}>
              <h2>{item.name}</h2>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
