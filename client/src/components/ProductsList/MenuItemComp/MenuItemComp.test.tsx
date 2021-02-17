import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MenuItemComp from './MenuItemComp';

describe('<MenuItemComp />', () => {
  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO: Mock onHandleClick event
    console.log(event);
  };
  test('it should mount', () => {
    render(
      <MenuItemComp
        category={'category1'}
        name={'category1'}
        dataId={1}
        onClick={onHandleClick}
      />
    );

    const menuItemComp = screen.getByTestId('MenuItemComp');

    expect(menuItemComp).toBeInTheDocument();
  });
});
