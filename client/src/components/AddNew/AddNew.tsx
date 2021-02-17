import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
import { BrandForm } from './Brand/BrandForm';
import { ProductForm } from './Product/ProductForm';
import { TypeForm } from './Type/TypeForm';
import { store } from '../../store';
import './AddNew.css'
export const AddNew: React.FC = () => {

  let { path, url } = useRouteMatch();
  return (
    <div className='Type' data-testid='Type'>
      <div className="navbar">
          <ul>
            <li>
              <Link to={`${url}/product`}>Add New Product</Link>
            </li>
            <li>
              <Link to={`${url}/brand`}>Add New Brand</Link>
            </li>
            <li>
              <Link to={`${url}/type`}>Add New Type</Link>
            </li>
          </ul>
      </div>
      <div className='main'>
        <Switch>
          <Route exact path={`${path}/product`}>
            <ProductForm />
          </Route>
          <Route path={`${path}/brand`}>
            <BrandForm />
          </Route>
          <Route path={`${path}/type`}>
            <TypeForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
