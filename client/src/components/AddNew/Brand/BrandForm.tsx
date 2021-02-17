import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { IProductBrand } from '../../../store/Interfaces';

export const BrandForm: React.FC = () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.brandReducer
  );
  const { getAllBrands } = useActions();
  const [brandName, setName] = useState('');

  useEffect(() => {
    getAllBrands();
    console.log('UseEffect');
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };

  const onHandleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    console.log(event.currentTarget.id);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log(event);
  };

  return (
    <div className='BrandForm' data-testid='BrandForm'>
      <div className='product-box-header wj-blue-bg'>
        <h1 className='center large white mx-10'>New Brand</h1>
      </div>
      <div className='row'>
        <div className='col-2'>
          <fieldset>
            <legend>Existing Brands:</legend>
            <div>
              <ul>
                {error && <h3>{error}</h3>}
                {loading && <h3 className='x-large'>Loading...</h3>}
                {/* {console.log(data, error, loading)} */}
                {!error &&
                  !loading &&
                  data.map((brand: IProductBrand) => (
                    <li key={brand.id}>
                      <button id={brand.id.toString()} onClick={onHandleClick}>
                        Id:{brand.id} - Name: {brand.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </fieldset>
        </div>
        <div className='col-2'>
          <form onSubmit={onSubmit}>
            <fieldset>
              <legend>New Brand:</legend>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                onChange={handleChange}
                value={brandName}
              />
              <button type='submit'>Add/Update</button>
              <button type='reset'>Cancel</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
