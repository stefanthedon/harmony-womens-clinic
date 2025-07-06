
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login, signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    let result = false;
    if (isLogin) {
      if (!email || !password) {
        setError('Please fill in all fields.');
        return;
      }
      result = login({ email });
      if (result) {
        setSuccess('Login successful! Redirecting...');
        setTimeout(() => navigate('/booking'), 1500);
      } else {
        setError('Invalid credentials or user not found.');
      }
    } else {
      if (!name || !email || !password) {
        setError('Please fill in all fields.');
        return;
      }
      result = signup({ name, email });
      if (result) {
        setSuccess('Signup successful! You are now logged in. Redirecting...');
        setTimeout(() => navigate('/booking'), 1500);
      } else {
        setError('An account with this email already exists.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-harmony-purple-100 flex flex-col justify-center items-center p-4">
        <Link to="/" className="text-4xl font-serif font-bold text-harmony-heading tracking-widest mb-8">
          HARMONY
        </Link>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-3 text-center font-semibold transition-colors ${isLogin ? 'text-harmony-purple-600 border-b-2 border-harmony-purple-600' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-3 text-center font-semibold transition-colors ${!isLogin ? 'text-harmony-purple-600 border-b-2 border-harmony-purple-600' : 'text-gray-500'}`}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-harmony-heading mb-6">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-purple-300"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-purple-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-harmony-purple-300"
          />
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}

          <button
            type="submit"
            className="w-full bg-harmony-purple-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-harmony-purple-600 transition-colors duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
