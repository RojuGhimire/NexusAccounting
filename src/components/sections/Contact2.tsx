import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-[#F7E8E8] p-10">
      {/* Contact Form */}
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg">
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p className="text-gray-600 mb-4">Advance Your Career with us.</p>

        {/* RPL and Online Checkboxes */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>RPL</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Online</span>
          </label>
        </div>

        {/* Form Inputs */}
        <input
          type="text"
          placeholder="Enter Name"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        <select className="w-full border border-gray-300 p-2 rounded mb-4">
          <option>Select course applying for*</option>
          {/* Add more options here */}
        </select>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />

        {/* Enroll Button */}
        <button className="w-full bg-red-600 text-white p-3 rounded">
          Enroll Now
        </button>
      </div>

      {/* Office Information Box */}
      <div className="bg-blue-900 text-white p-8 rounded-lg ml-10 relative max-w-sm">
        <h3 className="text-xl font-bold mb-4">DROP IN OUR OFFICE</h3>
        <p className="text-gray-300 mb-6">
          Lorem Ipsum has been the industry's standard dummy text ever since the...
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="material-icons text-red-400">location_on</span>
            <p>Perth, Australia</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons text-red-400">phone</span>
            <p>+61 450 545 073</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons text-red-400">email</span>
            <p>skillspotaustralia@gmail.com</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          {/* Replace with actual icons */}
          <span className="material-icons">facebook</span>
          <span className="material-icons">twitter</span>
          <span className="material-icons">whatsapp</span>
          <span className="material-icons">linkedin</span>
          <span className="material-icons">instagram</span>
        </div>

        {/* Decorative Lines */}
        <div className="absolute left-[-15px] top-10 h-10 w-2 bg-[#F7E8E8]"></div>
        <div className="absolute right-[-15px] bottom-10 h-10 w-2 bg-[#F7E8E8]"></div>
      </div>

      {/* Image Section */}
      <div className="ml-10">
        <img
          src="https://example.com/person-image.jpg" // Replace with actual image URL
          alt="Support Person"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;
