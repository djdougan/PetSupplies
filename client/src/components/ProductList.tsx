import * as React from 'react';
import { IProduct } from '../store/Interfaces/IProduct';
import {Product} from './Product'

type Props ={
  state: {data:[], error: string | null, loading: boolean}
}
export const ProductList: React.FC<Props> = ({state}:Props) => {
  const {data, error, loading} = state; 
  
  return (

    <div id='productList' className="container">
      {error && <h3>{error}</h3>}
      {loading && <h3 className="x-large">Loading...</h3>}
      {/* {console.log(data, error, loading)} */}
      {!error && !loading && data.map((product:IProduct) => <div key={product.id}><Product product={product}/></div>)}
    </div>
  );
};
