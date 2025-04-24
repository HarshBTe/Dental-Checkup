import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import jsPDF from 'jspdf';

const CheckupResults = () => {
  const [checkups, setCheckups] = useState([]);

  useEffect(() => {
    const fetchCheckups = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/checkups/results', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCheckups(response.data); // ✅ it's an array
      } catch (error) {
        console.error('Error fetching checkups:', error);
      }
    };

    fetchCheckups();
  }, []);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('Checkup Results', 10, 10);

    checkups.forEach((checkup, idx) => {
      doc.text(`Checkup ${idx + 1}`, 10, 20 + idx * 50);
      doc.text(`Dentist: ${checkup.dentist?.name || 'N/A'}`, 10, 30 + idx * 50);

      checkup.notes.forEach((note, noteIndex) => {
        doc.text(`Note ${noteIndex + 1}: ${note}`, 10, 40 + idx * 50 + noteIndex * 10);
      });
    });

    doc.save('checkup-results.pdf');
  };

  return (
    <div>
      <h2>Checkup Results</h2>
      {checkups.length === 0 ? (
        <p>No checkup results available.</p>
      ) : (
        <>
          {checkups.map((checkup, index) => (
            <div key={checkup._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <h4>Dentist: {checkup.dentist?.name || 'N/A'}</h4>
              <div>
                <h5>Images:</h5>
                {checkup.images.length === 0 ? (
                  <p>No images uploaded.</p>
                ) : (
                  checkup.images.map((image, i) => (
                    <img key={i} src={image} alt={`checkup-${index}-img-${i}`} width="100" />
                  ))
                )}
              </div>
              <div>
                <h5>Notes:</h5>
                {checkup.notes.length === 0 ? (
                  <p>No notes added.</p>
                ) : (
                  checkup.notes.map((note, i) => <p key={i}>{note}</p>)
                )}
              </div>
            </div>
          ))}
          <button onClick={handleExportPDF}>Export to PDF</button>
        </>
      )}
    </div>
  );
};

export default CheckupResults;
