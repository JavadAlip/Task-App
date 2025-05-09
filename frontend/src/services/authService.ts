// const API_URL = 'http://localhost:5000/api/auth';

// export const register = async (data: any) => {
//   const res = await fetch(`${API_URL}/register`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const login = async (data: any) => {
//   const res = await fetch(`${API_URL}/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (data: any) => {
  console.log('📤 Sending register POST request with:', data);
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    console.log('🌐 Response from server:', res);
    const jsonData = await res.json();
    console.log('📦 Parsed JSON response:', jsonData);

    return jsonData;
  } catch (error) {
    console.error('❗ Error in register() service:', error);
    return { message: 'Network error or server unavailable' };
  }
};

export const login = async (data: any) => {
  console.log('📤 Sending login POST request with:', data);
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const jsonData = await res.json();
    console.log('📦 Login response:', jsonData);
    return jsonData;
  } catch (error) {
    console.error('❗ Error in login() service:', error);
    return { message: 'Login failed' };
  }
};
