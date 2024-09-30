// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    address: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700">Mobile Number</label>
            <input 
              type="text" 
              name="mobileNumber" 
              id="mobileNumber" 
              value={formData.mobileNumber} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Address</label>
            <input 
              type="text" 
              name="address" 
              id="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700">City</label>
            <input 
              type="text" 
              name="city" 
              id="city" 
              value={formData.city} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <label htmlFor="country" className="block text-gray-700">Country</label>
            <input 
              type="text" 
              name="country" 
              id="country" 
              value={formData.country} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
