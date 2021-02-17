import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Brands from './Brands';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('<Brands />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <Brands />
      </Provider>
    );
    const brands = screen.getByTestId('Brands');

    expect(brands).toBeInTheDocument();
  });
});
