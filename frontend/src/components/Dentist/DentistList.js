import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/DentistList.css'; // Import the CSS file

const DentistList = () => {
  const [dentists, setDentists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/users/dentists', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDentists(response.data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dentist-container">
      <div className="dentist-header">
        <h2 className="dentist-title">Available Dentists</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <ul className="dentist-list">
        {dentists.map((dentist) => (
          <li key={dentist._id} className="dentist-item">
            <Link className="dentist-link" to={`/checkups/request/${dentist._id}`}>
              {dentist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DentistList;
