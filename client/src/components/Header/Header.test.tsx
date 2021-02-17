import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Header} from './Header';
import { BrowserRouter as Router } from 'react-router-dom';


describe('<Header />', () => {
  test('it should mount', () => {
    render(<Router><Header /></Router>);
    
    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });
});