import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {

  return (
    <div className='Contact' data-testid='Contact'>
      <div className='col-2'>
        {/* <form id='contact-form' onSubmit={handleSubmit} method='POST'> */}
        <form id='contact-form' method='POST'>
          <input type='text' className='form-control' placeholder='Full Name' />
          <input
            type='email'
            className='form-control'
            aria-describedby='emailHelp'
            placeholder='Email'
          />
          <textarea
            className='form-control'
            rows={10}
            cols={10}
            maxLength={11}
            placeholder='Message'></textarea>
          <button disabled type='submit' className=' form-control btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      <div className='col-2'>
        <address>
          <a href='mailto:ddougan@ddougan.com'>Douglas Dougan</a>.<br />
          Visit me at:
          <br />
          <a href='http://ddougan.com' target='_blank' rel='noreferrer'>
            ddougan.com
          </a>
          <br />
          Calgary, Alberta
          <br />
          Canada
        </address>
      </div>
    </div>
  );
};

export default Contact;
