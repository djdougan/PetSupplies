import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrandForm } from './BrandForm';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('<BrandForm />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <BrandForm />
      </Provider>
    );

    const brandForm = screen.getByTestId('BrandForm');

    expect(brandForm).toBeInTheDocument();
  });
});
