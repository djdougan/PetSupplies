import React from 'react';
import { render, screen } from '@testing-library/react';
// import {IKeyValuePair} from './../../../store/Interfaces'
import Types from './Types';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

describe('<Types />', () => {

test('it should mount', () => {
    render(
      <Provider store={store}>
        <Types />
      </Provider>
    );

    const types = screen.getByTestId('Types');

    expect(types).toBeInTheDocument();
    });
});
