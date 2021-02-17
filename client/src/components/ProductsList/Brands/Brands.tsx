import * as React from 'react';
import { useContext, useEffect } from 'react';
import { SearchContext } from '../../../context/AppContext';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { IProductBrand, IProductQueryParameters } from '../../../store/Interfaces';
import MenuItemComp from '../MenuItemComp/MenuItemComp';
import './Brands.css';



const Brands: React.FC= () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.brandReducer
  );
  const search = useContext(SearchContext);

  const { getAllBrands } = useActions();
  useEffect(() => {
    getAllBrands();
  }, []);

  const onHandleClick = async (event: React.MouseEvent<HTMLButtonElement>) =>{
      const newSearch = search?.query as IProductQueryParameters;
      let id = event.currentTarget.getAttribute('data-id');
      if (id) newSearch.ProductBrandId = parseInt(id);
      search?.saveSearch(newSearch);
    console.log(event)
  };

  return (
    <div className='Brands' data-testid='Brands'>
      <h2>Brands</h2>

      <MenuItemComp
        onClick={onHandleClick}
        category={'ProductBrand'}
        key={0}
        dataId={0}
        name={'Get All Brands'}
      />
      {error && <h3>{error}</h3>}
      {loading && <h3 className='x-large'>Loading...</h3>}
      {console.log(data, error, loading)}
      {!error &&
        !loading &&
        data.map((brand: IProductBrand) => (
          <MenuItemComp
            onClick={onHandleClick}
            category={'ProductBrand'}
            key={brand.id}
            dataId={brand.id}
            name={brand.name}
          />
        ))}
    </div>
  );
};

export default Brands;