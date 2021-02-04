import React, { useState } from 'react';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const Container: React.FC=() => {
  const { data, loading, error } = useTypedSelector(
      (store) => store.repositories
  )

  const [term, setTerm] = useState('');

  const { SearchRepositories } = useActions();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SearchRepositories(term);
  };

  
    return (
      <div className='container'>
          <Sidebar state={{ loading, error, data }} />
          {/* <ProductList state={{ loading, error, data }} /> */}
      </div>
    );  

}
export default Container;
