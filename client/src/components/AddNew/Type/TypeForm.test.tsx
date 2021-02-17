import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TypeForm } from './TypeForm';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('<TypeForm />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <TypeForm />
      </Provider>
    );

    const typeForm = screen.getByTestId('TypeForm');

    expect(typeForm).toBeInTheDocument();
  });
});
