import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import Form from './components/Form';
import FormWithHook from './components/FormWithHook';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="form1" element={<Form />}></Route>
      <Route path="form2" element={<FormWithHook />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
