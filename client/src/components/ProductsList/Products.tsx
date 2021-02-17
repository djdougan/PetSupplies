import React, { useContext, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { IProduct } from '../../store/Interfaces';
import Brands from './Brands/Brands';
import Types from './Types/Types';
import { Product } from './Product/Product';
import './Products.css';
import { SearchContext } from '../../context/AppContext';
import FilterBar from '../FilterBar/FilterBar';

export const Products: React.FC = () => {
  const { searchProducts } = useActions();

  const search = useContext(SearchContext);

  useEffect(() => {
    if (search) searchProducts(search.query);
  }, [search]);

  const { data, error, loading } = useTypedSelector(
    (state) => state.productsReducer
  );

  return (
    <div className='Products' data-testid='Products'>
      <div className='sidebar'>
        <Brands />
        <Types />
      </div>
      <div id='main-content' className='main-content'>
        <FilterBar />
        <div id='productList' className='product-list'>
          {error && <h3>{error}</h3>}
          {loading && <h3 className='x-large'>Loading...</h3>}
          {/* {console.log(data, error, loading)} */}
          {!error &&
            !loading &&
            data.map((product: IProduct) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
