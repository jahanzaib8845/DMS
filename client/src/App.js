import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [formData, setFormData] = useState({
    name: '', cnic: '', city: '', carType: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/drivers/register', formData);
      toast.success(res.data.message)
      setFormData({ name: '', cnic: '', city: '', carType: '' });
    } catch (err) {
      toast.error("Registration failed")
    }
  };

  return (
    <>
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Driver Registration</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="cnic"
            placeholder="CNIC"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="carType"
            placeholder="Car Type"
            value={formData.carType}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </div>

    <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

    </>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  heading: {
    color: '#12489C',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  input: {
    padding: 10,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 16,
  },
  button: {
    padding: 12,
    backgroundColor: '#12489C',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default App;
