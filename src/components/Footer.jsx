import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import TnC from '../components/TnC';
import Privacy from '../components/Privacy';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const footerLinks = {
    useful: [
      { name: 'Terms Conditions', href: '#', onClick: () => setOpenTerms(true) },
      { name: 'Privacy Policy', href: '#', onClick: () => setOpenPrivacy(true) },
    ],
    services: [
      { name: 'Data Protection & Privacy', href: '/services/12' },
      { name: 'Cloud Security', href: '/services/11' },
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/services/12' },
      { name: 'Aadhaar Security Audit', href: '/services/13' },
      { name: 'System Security Audit', href: '/services/16' },
      { name: 'Digital Forensics', href: '/services/17' },
      { name: 'IT Security Audit', href: '/services/19' },
      { name: 'IoT Security', href: '/services/18' },
      { name: 'Networking Audit', href: '/services/21' },
    ],
  };

  return (
    <footer className="bg-[#0d1117] text-gray-300">
      <div className="container-custom py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="flex flex-col items-start">
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              We help organizations strengthen their security posture through vulnerability assessments, penetration testing, and proactive risk management strategies.
            </p>
            <div className="flex space-x-3">
              <a href="https://x.com/codevirussec" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#161b22] rounded-full flex items-center justify-center hover:bg-green-500 transition duration-300">
                <FaTwitter className="text-gray-300 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/codevirussec" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#161b22] rounded-full flex items-center justify-center hover:bg-green-500 transition duration-300">
                <FaInstagram className="text-gray-300 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/codevirussecurity/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#161b22] rounded-full flex items-center justify-center hover:bg-green-500 transition duration-300">
                <FaLinkedin className="text-gray-300 hover:text-white" />
              </a>
              <a href="https://www.facebook.com/codevirussec9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#161b22] rounded-full flex items-center justify-center hover:bg-green-500 transition duration-300">
                <FaFacebookF className="text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 text-green-500">Location</h3>
            <div className="space-y-3">
              <a href="https://www.google.com/maps/search/?api=1&query=Lucknow,India" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 hover:bg-[#161b22] p-2 rounded-lg transition">
                <HiLocationMarker className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Address:</p>
                  <p className="text-gray-400 text-sm">Lucknow, India</p>
                </div>
              </a>
              <a href="mailto:services@codevirussec.in" className="flex items-start space-x-3 hover:bg-[#161b22] p-2 rounded-lg transition">
                <HiMail className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Email:</p>
                  <p className="text-gray-400 text-sm">services@codevirussec.in</p>
                </div>
              </a>
              <a href="tel:+919918103909" className="flex items-start space-x-3 hover:bg-[#161b22] p-2 rounded-lg transition">
                <HiPhone className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Phone:</p>
                  <p className="text-gray-400 text-sm">+91 9918103909</p>
                </div>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 text-green-500">Useful Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.useful.map((link) => (
                <li key={link.name}>
                  {link.onClick ? (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); link.onClick(); }}
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300 cursor-pointer text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:mb-6 text-green-500">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#161b22] mt-10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} CodevirusSecurity. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setOpenTerms(true); }}
                className="hover:text-green-500 transition duration-300 cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setOpenPrivacy(true); }}
                className="hover:text-green-500 transition duration-300 cursor-pointer"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <TnC open={openTerms} onClose={() => setOpenTerms(false)} />
      <Privacy open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </footer>
  );
};

export default Footer;
