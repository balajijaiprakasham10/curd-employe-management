import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  // Admin credentials
  const adminEmail = 'balaji@gmail.com';
  const adminPassword = '12345';

  // State for email and password input
  const [email, setEmail] = useState(adminEmail);
  const [password, setPassword] = useState(adminPassword);

  // Handle form submission
  const handleLogin = e => {
    e.preventDefault();

    // Check if entered email and password match admin credentials
    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          // Set authentication flag and show success message
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      // Show error if credentials don't match
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div
      className="small-container"
      style={{
        backgroundImage: "url(public/photos/1.jpg)",
        backgroundColor: '#f8f8f8',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '100px auto',
      }}
    >
      <form onSubmit={handleLogin}>
        <h1 style={{ textAlign: 'center' }}>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '8px 0' }}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '8px 0' }}
        />
        <input
          type="submit"
          value="Login"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '12px',
          }}
        />
      </form>
    </div>
  );
};

export default Login;
