import React from 'react';

const Form = () => {
  const handleInputChange = (e) => {
    // Your input change handling logic goes here
  };

  return (
    <div className='mt-[2rem]'>
      <h1 className='text-[2.2rem]'>Contact Me</h1>
      <form action='' method='POST' className='mt-[1.5rem]'>
        <div className='mb-[1rem]'>
          <label htmlFor='name' className='block text-left font-bold'>Name</label>
          <input 
            type='text'
            placeholder='Jane Appleseed' 
            name='name'
            id='name'
            aria-label='name'
            className='w-full py-[.8rem] px-[.5rem] leading-tight focus:outline-none bg-[#ddd] mt-[.5rem]'
          />
        </div>

        <div className='mb-[1rem]'>
          <label htmlFor='email' className='block text-left font-bold'>Email Address</label>
          <input 
            type='email'
            placeholder='email@example.com'
            name='email' 
            id='email'
            aria-label='email-address'
            className='w-full py-[.8rem] px-[.5rem] leading-tight focus:outline-none bg-[#ddd] mt-[.5rem]'
          />
        </div>

        <div className='mb-[1rem]'>
          <label htmlFor='message' className='block text-left font-bold'>Message</label>
          <textarea 
            placeholder='How can I help?' 
            name='message'
            id='message'
            aria-label='message'
            onChange={handleInputChange}
            className='w-full py-[1.3rem] px-[.5rem] focus:outline-none bg-[#ddd] mt-[.5rem]'
          />
        </div>
        
        <div className='mt-[2rem]'>
          <button type='submit' className='uppercase text-[.8rem] bg-[#203a4c] text-white py-[.8rem] px-[1.8rem] font-[100]'>Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
