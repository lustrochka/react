import { Outlet } from 'react-router-dom';
import { Page } from './Page';
import { useSearchParams } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { SearchProvider } from './Context';

export function Layout() {
  const [searchParams] = useSearchParams();
  return (
    <ErrorBoundary>
      <div className="page">
        <SearchProvider>
          <Page></Page>
          {searchParams.has('details') && (
            <Outlet context={[searchParams.get('details')]} />
          )}
        </SearchProvider>
      </div>
    </ErrorBoundary>
  );
}
