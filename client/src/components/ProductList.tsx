import * as React from 'react';

import { useState } from 'react';
import {useTypeSelectors} from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useActions';


const ProductList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const {data, error, loading} = useTypeSelectors{
    (state)=> state.repositories;
    };


  return (

    <div id='productList'>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name:IProduct) => <div key={name.id}>{name}</div>)}
    </div>
  );
};
export default ProductList;
