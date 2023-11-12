import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DetailedPage } from '../modules/DetailedPage/DetailedPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

jest.mock('axios');

describe('DetailedPage', () => {
  it('renders data correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: [{ name: 'Best', description: 'Lorem ipsum', abv: 8 }],
    });
    await act(async () => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<DetailedPage></DetailedPage>}></Route>
          </Routes>
        </BrowserRouter>
      );
    });
    expect(screen.getByText(/Best/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument();
    expect(screen.getByText(/8/)).toBeInTheDocument();
  });
});
