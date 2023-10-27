import { Component } from 'react';
import { ErrorBoundary } from './modules/ErrorBoundary';
import { Page } from './modules/Page';
import './App.scss';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Page />
      </ErrorBoundary>
    );
  }
}

export default App;
