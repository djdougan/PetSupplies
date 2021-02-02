import React from 'react';
import Shop from './Shop';
import Sidebar from './Sidebar';

class Container extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Shop />
      </div>
    );
  }
}
export default Container;
