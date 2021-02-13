import * as React from 'react';
import { ProductTypeList } from './ProductTypeList';
import { ProductBrandList } from './ProductBrandList';
import { IKeyValuePair } from '../store/Interfaces/IKeyValuePair';



type Props = {
  brandKeyValuePair: IKeyValuePair;
  typeKeyValuePair: IKeyValuePair;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {};
};
export const Sidebar: React.FC<Props> = ( {typeKeyValuePair, brandKeyValuePair, onClick }) => {

  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };
  return (
    <div className='sidebar'>
      <ProductBrandList onClick={onHandleClick}
        keyValuePair={brandKeyValuePair}
      />
      <ProductTypeList onClick={onHandleClick}
        keyValuePair={typeKeyValuePair}
      />
    </div>
  );
};
