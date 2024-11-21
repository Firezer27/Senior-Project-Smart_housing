
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (type) => {
    console.log(`Button clicked: ${type}`);
    navigate('/RegistrationForm', { state: { userType: type } });
  };

  return (
    <div>
      <h1>Welcome! Are you a Tenant or an Owner?</h1>
      <div>
        <button className='m-6 border-2 px-6' onClick={() => handleButtonClick('tenant')}>Tenant</button>
        <button className='m-6 border-2 px-6' onClick={() => handleButtonClick('owner')}>Owner</button>
      </div>
    </div>
  );
};

export default Home;
