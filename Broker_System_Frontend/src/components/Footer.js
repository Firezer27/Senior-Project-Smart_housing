import React from 'react'
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


 const Footer = () => {
     const [aboutText, setAboutText] = useState(
       "DirectLink is your trusted platform for finding and renting affordable housing. Connect with property owners and tenants to find your perfect home."
     );
  return (
    <footer className="bg-teal-900 text-gray-200 py-10 flex flex-col">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
          <p className="text-sm text-gray-300 mb-4">{aboutText}</p>
          <button
            onClick={() =>
              setAboutText(
                "Join thousands of satisfied users on DirectLink to start your journey today!"
              )
            }
            className="text-sm text-emerald-600 hover:text-emerald-500 transition"
          >
            Learn More
          </button>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-200 hover:text-emerald-600">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-emerald-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-emerald-600">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-200 hover:text-emerald-600">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-sm text-gray-300">
            Have questions? We're here to help.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <strong>Phone:</strong> +251 123 4567
            </li>
            <li>
              <strong>Fax:</strong> 9494 45949
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@directlink.com"
                className="text-emerald-600 hover:underline"
              >
                info@directlink.com
              </a>
            </li>
          </ul>
        </div>

        {/* Latest Properties Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">
            Latest Properties
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Villa"
                className="h-12 w-12 rounded object-cover border border-gray-400"
              />
              <div>
                <p className="text-sm text-white font-medium">
                  Villa with amazing view and safe place
                </p>
                <p className="text-sm text-gray-300">28,798</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="Beach House"
                className="h-12 w-12 rounded object-cover border border-gray-400"
              />
              <div>
                <p className="text-sm text-white font-medium">
                  Apartment
                </p>
                <p className="text-sm text-gray-300">48,718</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="mt-10 border-t border-gray-700"></div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} DirectLink Housing, All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}



export default Footer