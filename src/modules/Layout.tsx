import { Outlet } from 'react-router-dom';
import { Page } from './Page';
//import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function Layout() {
  const [searchParams] = useSearchParams();
  return (
    <div className="page">
      <Page></Page>
      {searchParams.has('details') ? (
        <Outlet context={[searchParams.get('details')]} />
      ) : (
        <></>
      )}
    </div>
  );
}
