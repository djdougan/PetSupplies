import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import {useActions} from '../hooks/useActions'
import {Sidebar} from './Sidebar';
import {ProductList} from './ProductList';



const Container: React.FC=() => {
  const [term, setState] = useState('');
  const {searchRepositories}= useActions();  
  const {data, error, loading} = useTypedSelector(
    (state) => state.repositories
  );


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
    setState( e.target.value);
  };

    return (
      <div className='container'>
          <Sidebar term={term} onSubmit = {onSubmit} onChange = {handleChange} />

          <ProductList state = {{data, loading, error}}/>
      </div>
    );  

}
export default Container;
