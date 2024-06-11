import React, { useState } from 'react';
import { Layout } from 'antd';

const { Content: AntdContent } = Layout;

const GymRegistration = ({ colorBgContainer, borderRadiusLG }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signing up...');
  };

  return (
    <AntdContent
      style={{
        margin: '10px 16px',
        padding: 24,
        minHeight: 420,
        background: "white",
        borderRadius: borderRadiusLG,
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Gym Registration</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </AntdContent>
  );
};

export default GymRegistration;