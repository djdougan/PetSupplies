import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';
import { ProductList } from './ProductList';
import { Sidebar } from './Sidebar';
import { IProductQueryParameters, IKeyValuePair } from '../store/Interfaces';
import { isNull } from 'util';
// import { ProductQueryParameters } from '../store/models';
// import {AppCtx} from '../AppStateContext.tsx.old'

const Container: React.FC = () => {
  //  const queryParams: IProductQueryParameters = {
  //    MaxSize: 100,
  //    Page: 1,
  //    Size: 50,
  //    SortBy: 'id',
  //    SortOrder: 'asc',
  //    Name: '',
  //    Description: '',
  //    UPC: '',
  //    MinPrice: 0,
  //    MaxPrice: Infinity,
  //    ProductType: '',
  //    ProductBrand: '',
  //  };
  const { searchProducts } = useActions();
  const [typeKeyValuePair, setTypeKeyValuePair] = useState<IKeyValuePair>({
    key: '',
    value: null,
  });
  const [brandKeyValuePair, setBrandKeyValuePair] = useState<IKeyValuePair>({
    key: '',
    value: null,
  });
  const [queryParams, setParams] = useState<IProductQueryParameters>({
    MaxSize: 100,
    Page: 1,
    Size: 50,
    SortBy: 'Price',
    SortOrder: 'desc',
    Name: null,
    Description: null,
    UPC: null,
    MinPrice: null,
    MaxPrice: null,
    ProductType: null,
    ProductBrand: null,
  });

  useEffect(() => {
    searchProducts(queryParams);
    console.log("UseEffect")
  }, []);

  const { data, error, loading } = useTypedSelector(
    (state) => state.productsReducer
  );

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // const { name, value } = event.target as HTMLButtonElement;
    // console.log(name, value);
    let name = event.currentTarget.name
    let dataId = event.currentTarget.getAttribute('data-id')
    console.log(name, dataId);
    event.preventDefault();
    setBrandKeyValuePair(brandKeyValuePair);
    setTypeKeyValuePair(typeKeyValuePair);

    setParams((prevQuery) => ({...queryParams, [name]: dataId}));

    await searchProducts(queryParams);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // setTerm(e.target.value);
  // };

  return (
    <div className='container'>
      <Sidebar brandKeyValuePair={brandKeyValuePair} typeKeyValuePair={typeKeyValuePair} onClick={onSubmit} />
      <ProductList state={{ data, error, loading }} />
    </div>
  );
};
export default Container;
