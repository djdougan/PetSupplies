import React from 'react';
import './Contact.css';


export const Contact: React.FC = () => {


  // const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //     setState({ text: e.currentTarget.value });
  // };


  // const handleSubmit(event: React.FormEvent<HTMLInputElement>) {

  //   const newValue = event.currentTarget.value;

  // }


  return (
    <div className='Contact' data-testid='Contact'>
      {/* <form id='contact-form' onSubmit={handleSubmit} method='POST'> */}
    <form id="contact-form" method="POST">
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea className='form-control' rows ={5}></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
  }

export default Contact;
