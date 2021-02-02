import React from 'react';
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const ProductList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { getProducts } = useActions();

    const { products, loading, error } = useTypedSelector(
      (store) => store.repositories
    );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getProducts(term);
  };

  return (
    <div>
       <form onSubmit={onSubmit}>
         <button>Search</button>
       </form>
         <input value={term} onChange={(e) => setTerm(e.target.value)} />
       {error && <h3>{error}</h3>}
       {loading && <h3>Loading...</h3>}
       {!error && !loading &&
         products.map((product) => (
           <div key={product.id}>{product}</div>
        ))}
    </div>
  );
};
export default ProductList;
