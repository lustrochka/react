import { Outlet } from 'react-router-dom';
import { Page } from './Page';
import { useSearchParams } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { SearchProvider } from './Context';
import { store } from '../store/store';
import { Provider } from 'react-redux';

export function Layout() {
  const [searchParams] = useSearchParams();
  return (
    <ErrorBoundary>
      <div className="page">
        <Provider store={store}>
          <Page></Page>
          {searchParams.has('details') && (
            <Outlet context={[searchParams.get('details')]} />
          )}
        </Provider>
      </div>
    </ErrorBoundary>
  );
}
