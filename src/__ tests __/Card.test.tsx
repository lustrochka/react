import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from '../modules/Card';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

describe('Card', () => {
  it('renders data correctly', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <Card
                item={{ id: 8, name: 'Best', description: 'Lorem ipsum' }}
              ></Card>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByText(/Best/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument();
  });
});
