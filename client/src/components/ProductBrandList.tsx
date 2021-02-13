import * as React from 'react';
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { IKeyValuePair, IProductBrand } from '../store/Interfaces';
import ProductBrandComp from './ProductBrandComp';


type Props = {
  keyValuePair: IKeyValuePair;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {};
};

export const ProductBrandList: React.FC<Props> = ({
  keyValuePair,
  onClick,
}: Props) => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.brandReducer
  );

  const { getAllBrands } = useActions();
  useEffect(() => {
    getAllBrands();
  }, []);

  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
    console.log('brand', [event.currentTarget.name], event.currentTarget.value);
  };
  return (
    <div className='list'>
      <h2>Brands</h2>
      <ProductBrandComp
        bName={"Get All Brands"}
        dataId={0}
        onClick={onHandleClick}
      />
      {error && <h3>{error}</h3>}
      {loading && <h3 className='x-large'>Loading...</h3>}
      {/* {console.log(data, error, loading)} */}
      {!error &&
        !loading &&
        data.map((brand: IProductBrand) => (
          <ProductBrandComp
          key={brand.id}
            bName={brand.name}
            dataId={brand.id}
            onClick={onHandleClick}
          />
        ))}
    </div>
  );
};
