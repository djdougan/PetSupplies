import React from 'react';
import { IKeyValuePair } from '../store/Interfaces';
import { IProductType } from '../store/Interfaces/IProductType';

type Props = {
  dataId:number;
  tName: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const ProductTypeComp: React.FC<Props> = ({dataId, tName , onClick }: Props) => {

  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick(event);
  };
  return (
    <button  name="ProductType" data-id={dataId} value={tName} className='type-button' onClick={onHandleClick} >
      {tName}
    </button>
  );
};

export default ProductTypeComp;
