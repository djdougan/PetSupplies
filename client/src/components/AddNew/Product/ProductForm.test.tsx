import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductForm } from './ProductForm';
import '@testing-library/jest-dom/extend-expect';

describe('<ProductForm />', () => {
  test('it should mount', () => {
    render(<ProductForm />);

    const productForm = screen.getByTestId('ProductForm');

    expect(productForm).toBeInTheDocument();
  });
});
