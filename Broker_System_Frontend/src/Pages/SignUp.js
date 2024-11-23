import React, { useState } from 'react';
import { auth } from '../Firebase'; 
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const location = useLocation();
  const roleId = location.state?.userTypeId || null; 
  
  console.log("Role ID passed from Home page:", roleId);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!roleId) {
      setError('Role ID is missing. Please go back and select a role.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created:", userCredential.user);

      await sendEmailVerification(userCredential.user);
      setSuccess('Verification email sent! Please check your inbox.');

 
      const uid = userCredential.user.uid;
      console.log("User UID:", uid);

      await assignRole(uid, roleId);

      navigate('/login');
    } catch (err) {
      console.error("Error during registration:", err);
      setError(err.message);
    }
  };

  const assignRole = async (uid, roleId) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uid, roleId }), 
      });

      if (!response.ok) {
        throw new Error('Failed to assign role.');
      }

      const data = await response.json();
      console.log("Role assignment response:", data);
    } catch (error) {
      console.error('Error assigning role:', error);
      throw new Error('Failed to assign role.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}
    </div>
  );
};

export default RegistrationForm;
