import { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login({ email, password, role: 'user' });

    if (res.token) {
      localStorage.setItem('token', res.token);
      navigate('/userdashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
  