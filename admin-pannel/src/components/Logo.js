import React from 'react';
// Adjust the path as per your folder structure

const Logo = () => {
  return (
    <div className='text-2xl flex items-center justify-center' style={{ textAlign: 'center', marginTop: '10px' }}>
    <p className='font-semibold text-xl text-green-400'>GreenCart</p>
    <p>🍀</p>
      {/* <img src={greencartLogo} alt="GreenCart Logo" className='text- h-12 w-12 mix-blend-multiply' /> */}
    </div>
  );
};

export default Logo;
