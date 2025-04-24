import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

const CheckupRequest = () => {
  const { id } = useParams();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRequest = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.post(`/checkups/request/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Checkup requested successfully');
      
      navigate('/checkups/results');
    } catch (error) {
      setError('Error requesting checkup');
    }
  };

  return (
<div
  style={{
    maxWidth: '400px',
    margin: '60px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  }}
>
  <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Request Checkup</h2>
  <button
    onClick={handleRequest}
    style={{
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
  >
    Request Checkup
  </button>
  {error && (
    <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>
  )}
</div>

  );
};

export default CheckupRequest;
