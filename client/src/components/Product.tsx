import * as React from 'react';
import { IProduct } from '../store/Interfaces/IProduct';

type Props = {
  product: IProduct;
};

export const Product: React.FC<Props> = ({ product }: Props) => {
  return (
    <div className='product-box'>
      <div className='product-box-header wj-blue-bg'>
      <h1 className='center large white mx-10' >{product.name}</h1>
      </div>
      <div className='product-row'>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
      <div>
        <img
          className='thumbnail sticky-bottom'
          src={'https://10.0.0.233:45455/images/' + product.pictureUrl}
          alt={product.name}
        />
      </div>
      <div className='product-row sticky-bottom'>
        <p className='large'>
          Price: <span>${product.price}</span>
        </p>
        <p className='x-small'>
          UPC: <span>{product.upc}</span>
        </p>
      </div>
    </div>
  );
};
// description: string;
// netWeight: string;
// pictureUrl: string;
// productType: IProductType;
// productTypeId: number;
// productBrand: IProductBrand;
// productBrandId: number;
