import React, { useState } from 'react';
import { useEffect } from 'react';
import { IKeyValuePair } from '../store/Interfaces';
import { IProductBrand } from '../store/Interfaces/IProductBrand';

type Props = {
  bName: string;
  dataId: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ProductBrandComp: React.FC<Props> = ({bName, dataId, onClick }: Props) => {

  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };
  return (
    <button
      name={"ProductBrand"}
      data-id={dataId}
      value={bName}
      className='brand-button'
      onClick={onHandleClick}>
      {bName}
    </button>
  );
};

export default ProductBrandComp;
