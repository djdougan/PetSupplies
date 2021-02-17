import React from 'react';
import { render, screen } from '@testing-library/react';
import {Product} from './Product';

import '@testing-library/jest-dom/extend-expect';
// import { IProductQueryParameters } from '../../store/Interfaces';


describe('<Products />', () => {

const testProduct = {
  id : 1,
  name : 'Product1',
  description : 'description1',
  upc :'123456789',
  netWeight:'1kg',
  price: 1.0,
  pictureUrl: 'picture1.jpg',
  productTypeId: 1,
  productBrandId: 1,
};
  test('it should mount', () => {
    render(<Product product={testProduct} />);
    
    const product = screen.getByTestId('Product');

    expect(product).toBeInTheDocument();
  });
});