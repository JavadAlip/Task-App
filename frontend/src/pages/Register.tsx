// import { useState } from 'react';
// import { register } from '../services/authService';

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await register(formData);
//     if (res.token) {
//       localStorage.setItem('token', res.token);
//       // redirect logic here
//     } else {
//       setError(res.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Register</h2>
//         {error && <p className="text-red-500 mb-2">{error}</p>}
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded"
//           required
//         />
//         <select
//           name="role"
//           onChange={handleChange}
//           className="w-full border p-2 mb-4 rounded"
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button
//           type="submit"
//           className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom'; 

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📨 Submitting form with data:', formData);
    try {
      const res = await register(formData);
      console.log('✅ Server response:', res);

      if (res.token) {
        localStorage.setItem('token', res.token);
        console.log('🔐 Token stored in localStorage');
        navigate('/login');
      } else {
        setError(res.message || 'An error occurred');
      }
    } catch (err: any) {
      console.error('❌ Error during registration:', err);
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <select
          name="role"
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        >
          <option value="user">User</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
}
