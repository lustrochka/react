import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from '../modules/Card';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Card', () => {
  it('renders data correctly', async () => {
    const { container } = render(
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
    await userEvent.click(container.getElementsByClassName('beer-item')[0]);
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled();
      expect(
        container.getElementsByClassName('details')[0]
      ).toBeInTheDocument();
    });
  });
});
