import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { IProductType } from '../../../store/Interfaces';

export const TypeForm: React.FC = () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.typesReducer
  );
  const { type, err, isloading } = useTypedSelector(
    (state) => state.typeReducer
  );

  const { getAllTypes } = useActions();
  const { getTypeById } = useActions();

  const [inputValue, setInputValue] = React.useState({ id: 0, name: '' });

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleChange = <P extends keyof IProductType>(
    prop: P,
    value: IProductType[P]
  ) => {
    setInputValue({ ...inputValue, [prop]: value });
  };

  const onHandleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    let id: number = parseInt(event.currentTarget.id);
    let name: string = event.currentTarget.name;
    setInputValue({id, name});
    // console.log(inputValue.id, inputValue.name, inputValue)
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className='TypeForm' data-testid='TypeForm'>
      <div className='product-box-header wj-blue-bg'>
        <h1 className='center large white mx-10'>New Type</h1>
      </div>
      <div className='row'>
        <div className='col-2'>
          <fieldset>
            <legend>Existing Types:</legend>
            <div>
              <ul>
                {error && <h3>{error}</h3>}
                {loading && <h3 className='x-large'>Loading...</h3>}
                {/* {console.log(data, error, loading)} */}
                {!error &&
                  !loading &&
                  data.map((typ: IProductType) => (
                    <li key={typ.id}>
                      <button id={typ.id.toString()} onClick={onHandleClick} name={typ.name}>
                        Id:{typ.id} - Name: {typ.name}
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
              <legend>New Type:</legend>
              <input id='id' type='hidden' name='id' value={inputValue.id} />
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                onChange={(e) => {
                  handleChange('name', e.target.value);
                }}
                value={inputValue.name}
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
