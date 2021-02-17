import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <div className='Header wj-blue-bg' data-testid='Header'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/addnew'>Add Product</Link>
          </li>
        </ul>

        {/* <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch> */}
      </div>
    );
  }
}
