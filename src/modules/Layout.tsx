import { Outlet } from 'react-router-dom';
import { Page } from './Page';

export function Layout() {
  return (
    <div>
      <Page></Page>
      <Outlet />
    </div>
  );
}
