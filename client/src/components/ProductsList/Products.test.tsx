import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Products } from './Products';
import { Provider } from 'react-redux';
import { store } from '../../store';
// import { IProductQueryParameters } from '../../store/Interfaces';

describe('<Products />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    const products = screen.getByTestId('Products');

    expect(products).toBeInTheDocument();
  });
});
