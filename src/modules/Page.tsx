import { Component } from 'react';
import axios from 'axios';
import imgUrl from '../assets/PIWO.svg';
import searchUrl from '../assets/drawing-2.svg';
import '../App.scss';

interface responseItem {
  id: number;
  name: string;
  description: string;
  error: boolean;
}

export class Page extends Component {
  state = {
    beers: [],
    searchString: localStorage.getItem('searchString') || '',
    loadingClass: 'loading',
    resClass: 'results hiding',
    nothingClass: 'not-found hiding',
    error: false,
  };
  componentDidMount(): void {
    this.search();
  }
  componentDidUpdate() {
    if (this.state.error) throw new Error('This is an error');
  }
  search() {
    const BASE_URL = 'https://api.punkapi.com/v2/beers/';
    const url = this.state.searchString
      ? `${BASE_URL}?beer_name=${this.state.searchString.replace(' ', '_')}`
      : BASE_URL;
    axios.get(url).then((res) => {
      if (res.data.length > 0) {
        this.setState({
          loadingClass: 'loading hiding',
          resClass: 'results',
          nothingClass: 'not-found hiding',
          beers: res.data,
        });
      } else {
        this.setState({
          loadingClass: 'loading hiding',
          nothingClass: 'not-found',
        });
      }
    });
  }
  render() {
    return (
      <>
        <div className="top-section">
          <button
            className="error-button"
            onClick={() => {
              this.setState({ error: true });
            }}
          >
            Make an error
          </button>
          <div className="search-block">
            <div>Find beer</div>
            <div className="search">
              <input
                type="search"
                value={this.state.searchString}
                className="search-input"
                onChange={(event) =>
                  this.setState({ searchString: event.target.value.trim() })
                }
              ></input>
              <div
                className="loupe"
                onClick={() => {
                  this.setState({
                    loadingClass: 'loading',
                    resClass: 'results hiding',
                    nothingClass: 'not-found hiding',
                  });
                  localStorage.setItem('searchString', this.state.searchString);
                  this.search();
                }}
              >
                <img src={searchUrl}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-section">
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
          <h2 className={this.state.nothingClass}>Nothing found :(</h2>
          <div className={this.state.resClass}>
            <div className="beer-container">
              {this.state.beers.map((item: responseItem) => (
                <div key={item.id.toString()} className="beer-item">
                  <h3>{item.name}</h3>
                  <div>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
