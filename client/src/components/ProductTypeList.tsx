import * as React from 'react';
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { IKeyValuePair, IProductType } from '../store/Interfaces';
import ProductTypeComp from './ProductTypeComp';

type TypeProps = {
  keyValuePair: IKeyValuePair;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ProductTypeList: React.FC<TypeProps> = ({
  keyValuePair,
  onClick,
}: TypeProps) => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.typeReducer
  );

  const { getAllTypes } = useActions();

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    console.log('type', [event.currentTarget.name], event.currentTarget.value);
    onClick(event);
  };

  return (
    <div className='list'>
      <h2>Types</h2>
      <ProductTypeComp
        dataId={0}
        tName={"Get All Types"}
        onClick={handleClick}
      />
      {error && <h3>{error}</h3>}
      {loading && <h3 className='x-large'>Loading...</h3>}
      {/* {console.log(data, error, loading)} */}
      {!error &&
        !loading &&
        data.map((type: IProductType) => (
          <ProductTypeComp
            key={type.id}
            dataId={type.id}
            tName={type.name}
            onClick={handleClick}
          />
        ))}
    </div>
  );
};
