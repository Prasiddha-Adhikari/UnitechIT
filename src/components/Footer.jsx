"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center mx-auto max-w-5xl">
          {/* About */}
          <div className="md:col-span-1 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">
              Unitech IT Solution
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              The only IT training institute in Kathmandu, Nepal offering internships after course completion.
            </p>

            {/* Social Icons below */}
            <div className="flex space-x-6 mt-auto text-gray-400 py-12">
              <a href="#" aria-label="Facebook" className="hover:text-white transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-white transition">Student Spotlight</a></li>
             
            </ul>
          </nav>

          {/* Get Regular Updates */}
          <nav className="md:col-span-1 flex flex-col">
            <h4 className="text-white font-semibold mb-4">Get Regular Updates</h4>
            <ul className="space-y-2 text-sm mb-6">
               <li><a href="#" className="hover:text-white transition">Project Management</a></li>
              <li><a href="#" className="hover:text-white transition">WordPress Development</a></li>
              <li><a href="#" className="hover:text-white transition">Business Strategy</a></li>
              <li><a href="#" className="hover:text-white transition">Software Development</a></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm space-y-2">
              <p>Chabahil, Kathmandu</p>
              <p>Phone: <a href="tel:+9779761612361" className="hover:text-white">+977 9841315441</a></p>
              <p>Email: <a href="mailto:learninagile@gmail.com" className="hover:text-white">unitech@gmail.com</a></p>
            </address>
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="border-gray-400 border-t my-8 max-w-5xl mx-auto" />

        {/* Bottom copyright and credit */}
       <div className="flex justify-between items-center text-white text-, max-w-5xl mx-auto">
  <p>Designed & Developed by Unitech IT Solution</p>
  <p>© Copyright 2024 Unitech IT Solution. All rights reserved.</p>
</div>

      </div>
    </footer>
  );
}
