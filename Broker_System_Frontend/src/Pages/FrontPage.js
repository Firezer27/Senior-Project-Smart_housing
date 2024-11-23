import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/roles/all');
        const data = await response.json();

        if (response.ok) {
          setRoles(data.roles);
        } else {
          setError(data.error || 'Failed to fetch roles');
        }
      } catch (err) {
        setError('Failed to fetch roles');
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  const handleButtonClick = (roleId) => {
    console.log(`Button clicked with Role ID: ${roleId}`);
    navigate('/RegistrationForm', { state: { userTypeId: roleId } });
  };

  return (
    <div>
      <h1>Welcome! Please choose your role</h1>

      {loading ? (
        <p>Loading roles...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          {roles.length > 0 ? (
            roles.map((role) => (
              <button
                key={role._id}
                className="m-6 border-2 px-6"
                onClick={() => handleButtonClick(role._id)} 
              >
                {role.name}
              </button>
            ))
          ) : (
            <p>No roles available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
