import * as React from 'react';
import { useContext, useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import {IProductQueryParameters, IProductType } from '../../../store/Interfaces';
import MenuItemComp from '../MenuItemComp/MenuItemComp';
import { useDispatch } from 'react-redux';
import './Types.css';
import { SearchContext } from '../../../context/AppContext';



const Types: React.FC = () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.typesReducer
  );
  const search = useContext(SearchContext);

  const { getAllTypes } = useActions();

  useEffect(() => {
    getAllTypes();
  }, []);




  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) =>{

      const newSearch = search?.query as IProductQueryParameters;
      let id = event.currentTarget.getAttribute("data-id");
      if(id)
      newSearch.ProductTypeId = parseInt(id);
      search?.saveSearch(newSearch);
    console.log(event)
  };

  return (
    <div className='Types' data-testid='Types'>
  
      <h2>Types</h2>

      <MenuItemComp
        category={'ProductType'}
        key={0}
        dataId={0}
        name={'Get All Types'}
        onClick={onHandleClick}
      />
      {error && <h3>{error}</h3>}
      {loading && <h3 className='x-large'>Loading...</h3>}
      {console.log(data, error, loading)}
      {!error &&
        !loading &&
        data.map((type: IProductType) => (
          <MenuItemComp
            category={'ProductType'}
            key={type.id}
            dataId={type.id}
            name={type.name}
            onClick={onHandleClick}
          />
        ))}
    </div>
  );
};

export default Types;