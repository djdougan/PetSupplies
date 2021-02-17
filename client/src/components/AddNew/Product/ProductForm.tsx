import * as React from 'react';
import { useForm } from 'react-hook-form';

type IFormInput = {
  name: string;
  description: string;
  upc: string;
  netWeight: string;
  price: number;
  pictureUrl: string;
  productTypeId: number;
  productBrandId: number;
};

export const ProductForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  return (
    <div className='ProductForm' data-testid='ProductForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='product-box'>
          <div className='product-box-header wj-blue-bg'>
            <h1 className='center large white mx-10'>New Product</h1>
          </div>
          <div>
            <label htmlFor='product_name'>
              Name:
              <input
                type='text'
                name='product_name'
                id='product_name'
                ref={register({ required: true })}
              />
            </label>
          </div>
          <div>
            <label htmlFor='product_description'>
              Description:
              <input
                type='text'
                name='product_description'
                id='product_description'
                ref={register({ required: true })}
              />
            </label>
          </div>
          <div>
            <label htmlFor='product_upc'>
              UPC:
              <input
                type='text'
                name='product_upc'
                id='product_upc'
                ref={register({ required: true })}
              />
            </label>
          </div>
          <div>
            <label htmlFor='product_net_weight'>
              Net Weight:
              <input
                type='text'
                name='product_net_weight'
                id='product_net_weight'
                ref={register({ required: true })}
              />
            </label>
          </div>
          <div>
            <label htmlFor='product_price'>
              Price:
              <input
                type='text'
                name='product_price'
                id='product_price'
                ref={register({ required: true })}
              />
            </label>
          </div>
          <div>
            <label htmlFor='product_type'>
              Type:
              <select
                name='product_type'
                id='product_type'
                ref={register({ required: true })}>
                <option value=''></option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor='product_brand'>
              Brand:
              <select
                name='product_brand'
                id='product_brand'
                ref={register({ required: true })}>
                <option value=''></option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor='product_picture'>
              Picture:
              <input
                type='file'
                name='product_picture'
                id='product_picture'
                ref={register({ required: true })}
              />
            </label>
          </div>
        </div>
        <input type='submit' />
        <input type='cancel' />
      </form>
    </div>
  );
};
