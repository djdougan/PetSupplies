import React, { createContext, useState } from 'react';
import { ChangeEvent } from 'react';

import { IProductQueryParameters } from './store/Interfaces/IProductQueryParameters';
import { ProductQueryParameters } from './store/models/ProductQueryParameters';

export interface AppState {
  queryParams: IProductQueryParameters;  
  
  handleInputChange(event: ChangeEvent<HTMLInputElement>):void;
  handleSubmit(event: ChangeEvent<HTMLInputElement>): void;

  state: {
    baseUrl: string;
    productUrl: string;
    typeUrl: string;
    brandUrl: string;
    imageUrl: string;
  };
}

export const AppContext = createContext<AppState>({
  queryParams: new ProductQueryParameters(),
  state: {
    baseUrl: 'localhost:5000/',
    productUrl: 'localhost:5000/products/',
    typeUrl: 'localhost:5000/types/',
    brandUrl: 'localhost:5000/brands/',
    imageUrl: 'localhost:5000/images/',
  },
  handleInputChange(event: ChangeEvent<HTMLInputElement>):void {
    const { name, value } = event.target;
      this.setState({[name]: value});
  },
  handleSubmit(event: ChangeEvent<HTMLInputElement>): void{

  },

});
