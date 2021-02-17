import * as React from 'react';
import { IProduct } from '../../../store/Interfaces/IProduct';
import './Product.css';
type Props = {
  product: IProduct;
};

export const Product: React.FC<Props> = ({ product }: Props) => {

  const addDefaultSrc = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    // console.log("Image load failed",event)
    event.currentTarget.src =
      'https://10.0.0.233:45455/images//image-coming-soon-ecc.png';
    event.currentTarget.onerror = null;
  };
  return (
    <div className='Product' data-testid='Product'>
      <div className='product-box-header wj-blue-bg'>
        <h1 className='center large white px-10'>{product.name}</h1>
      </div>
      <div className='product-row product-description'>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p className='read-more'>
          <a href='#' className='button'>
            Read More
          </a>
        </p>
      </div>
      <div>
        {/* TODO: fix show default image load fail */}
        <img
          className='thumbnail'
          src={'https://10.0.0.233:45455/images/' + product.pictureUrl}
          onError = {(e) => addDefaultSrc(e)}
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
