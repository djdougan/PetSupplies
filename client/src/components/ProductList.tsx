import * as React from 'react';
import { IProduct } from '../state/Interfaces/IProduct';
import { IProductType } from '../state/Interfaces/IProductType';

type Props ={
  state: {data: IProduct[], error: string | null, loading: boolean}
}
export const ProductList: React.FC<Props> = ({state}:Props) => {
  const {data, error, loading} = state; 
  return (
    <div id='productList'>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {console.log(data)}
      {!error && !loading && data.map((product:IProduct) => <div key={product.id}>{product}</div>)}
    </div>
  );
};
