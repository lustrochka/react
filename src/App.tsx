import { Component } from 'react';
import axios from 'axios';
import imgUrl from './assets/PIWO.svg';
import './App.scss';

interface responseItem {
  id: number;
  name: string;
  description: string;
}

class App extends Component {
  state = {
    beers: [],
    searchString: localStorage.getItem('searchString') || '',
    loadingClass: 'loading',
    resClass: 'results hiding',
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
        loadingClass: 'loading hiding',
        resClass: 'results',
        beers: res.data,
      });
    });
  }
  render() {
    return (
      <>
        <div className="search">
          <input
            type="search"
            value={this.state.searchString}
            onChange={(event) =>
              this.setState({ searchString: event.target.value.trim() })
            }
          ></input>
          <button
            onClick={() => {
              this.setState({
                loadingClass: 'loading',
                resClass: 'results hiding',
              });
              localStorage.setItem('searchString', this.state.searchString);
              this.search();
            }}
          >
            🔍
          </button>
        </div>
        <div className={this.state.loadingClass}>
          <div>
            <img src={imgUrl} className="bubble"></img>
          </div>
          <div>
            <img src={imgUrl} className="bubble"></img>
          </div>
          <div>
            <img src={imgUrl} className="bubble"></img>
          </div>
          <div>
            <img src={imgUrl} className="bubble"></img>
          </div>
          <div>
            <img src={imgUrl} className="bubble"></img>
          </div>
        </div>
        <div className={this.state.resClass}>
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
