import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
//import { ErrorBoundary } from './modules/ErrorBoundary';
import './App.scss';
import { Layout } from './modules/Layout';
import { DetailedPage } from './modules/DetailedPage/DetailedPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<DetailedPage />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
