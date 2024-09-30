// src/components/Payment.js
import React, { useState } from 'react';

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expDate: '',
    cvv: '',
    nameOnCard: '',
    useShippingAsBilling: false,
    saveInfo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Payment Information</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
            <input 
              type="text" 
              name="cardNumber" 
              id="cardNumber" 
              value={formData.cardNumber} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
              placeholder="1234 5678 9012 3456"
            />
          </div>

          {/* Expiration Date */}
          <div className="mb-4">
            <label htmlFor="expDate" className="block text-gray-700">Expiration Date</label>
            <input 
              type="text" 
              name="expDate" 
              id="expDate" 
              value={formData.expDate} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
              placeholder="MM/YY"
            />
          </div>

          {/* CVV */}
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700">CVV</label>
            <input 
              type="text" 
              name="cvv" 
              id="cvv" 
              value={formData.cvv} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
              placeholder="123"
            />
          </div>

          {/* Name on Card */}
          <div className="mb-4">
            <label htmlFor="nameOnCard" className="block text-gray-700">Name on Card</label>
            <input 
              type="text" 
              name="nameOnCard" 
              id="nameOnCard" 
              value={formData.nameOnCard} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
              placeholder="John Doe"
            />
          </div>

          {/* Use Shipping Address as Billing Address */}
          <div className="mb-4 flex items-center">
            <input 
              type="checkbox" 
              name="useShippingAsBilling" 
              id="useShippingAsBilling" 
              checked={formData.useShippingAsBilling} 
              onChange={handleChange} 
              className="mr-2"
            />
            <label htmlFor="useShippingAsBilling" className="text-gray-700">Use shipping address as billing address</label>
          </div>

          {/* Save Information for Faster Checkout */}
          <div className="mb-6 flex items-center">
            <input 
              type="checkbox" 
              name="saveInfo" 
              id="saveInfo" 
              checked={formData.saveInfo} 
              onChange={handleChange} 
              className="mr-2"
            />
            <label htmlFor="saveInfo" className="text-gray-700">Save my information for faster checkout</label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
