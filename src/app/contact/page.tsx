'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Submit to backend here
  };

  return (
    <main className="min-h-screen flex justify-center items-start py-12 px-4 bg-gray-100">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-10">
          Know About Us <span className="text-orange-600">MORE</span>
        </h1>

        {/* Form + Map */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-orange-700">Fill Your Queries Here</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full p-2 border border-orange-200 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="w-full p-2 border border-orange-200 rounded"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              onChange={handleChange}
              className="w-full p-2 border border-orange-200 rounded"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message..."
              required
              onChange={handleChange}
              className="w-full p-2 border border-orange-200 rounded"
            />

            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
            >
              Submit
            </button>
          </form>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md bg-blue-50 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.97450298409!2d85.34895689999999!3d27.7180735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1979f9421f8f%3A0xd6e0c21ed996dfac!2sUnitech%20IT%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1748854502962!5m2!1sen!2snp" 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
          </div>
        </div>

        {/* Support Info Section */}
        <div className="bg-green-50 p-6 rounded-2xl shadow-md">
  <h2 className="text-xl font-semibold text-green-700 mb-6 text-center">Support Team</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {/* Phone Card */}
    <div className="bg-white border border-green-100 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-green-600 font-semibold mb-2">📞 Our Numbers:</p>
      <p className="text-sm">+977 9841315441</p>
      <p className="text-sm">+977 01-4589902</p>
    </div>

    {/* Email Card */}
    <div className="bg-white border border-green-100 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-green-600 font-semibold mb-2">📧 Email Address:</p>
      <p className="text-sm italic text-gray-400">No email address provided</p>
      {/* Uncomment if needed:
      <p className="text-sm">admission@agileinstitute.com.np</p>
      <p className="text-sm">info@agileinstitute.com.np</p>
      */}
    </div>

    {/* Location Card */}
    <div className="bg-white border border-green-100 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <p className="text-green-600 font-semibold mb-2">📍 Our Location:</p>
      <p className="text-sm">Unitech IT Solution</p>
      <p className="text-sm">Chabahil, Kathmandu</p>
    </div>
  </div>
</div>

      </div>
    </main>
  );
}
