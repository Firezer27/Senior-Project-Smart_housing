import React, { useState } from 'react';
import { auth } from '../Firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        setError('Please verify your email before logging in. Check your email inbox!');
        return;
      }
      console.log('Logged in:', user);
      setSuccess('Login successful!');
      const uid = user.uid;
      console.log("User UID:", uid);
      const idToken = await user.getIdToken();
      
    console.log("ID Token:", idToken);
    const decodedToken = jwtDecode(idToken);
    console.log(decodedToken);
    const uidfromtoken = decodedToken.sub;
    console.log("Decoded UID from ID token:", uidfromtoken);
    const userType = decodedToken.userType;
    console.log("Decoded  userType from ID token:", userType);

if (userType === 'owner') {
  navigate('/ownerPage');
} else if (userType === 'tenant') {
  navigate('/tenantPage'); 
} else {
  console.log('No specific role, navigating to default page.');
  navigate('/'); 
}

    } catch (err) {
      setError(err.message);
      console.error('Error logging in:', err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
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
          Login
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}
    </div>
  );
};

export default Login;
