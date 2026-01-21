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

  return (
    <footer className="bg-[#0d1117] text-gray-300 relative">
      
      {/* Top gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We help organizations strengthen their security posture through
              vulnerability assessments, penetration testing, and proactive risk
              management strategies.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <FaTwitter />, link: "https://x.com/codevirussec" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/codevirussec" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/codevirussecurity/" },
                { icon: <FaFacebookF />, link: "https://www.facebook.com/codevirussec9" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#161b22] rounded-full flex items-center justify-center 
                             hover:bg-green-500 hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <span className="text-gray-300 hover:text-white">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-500">Location</h3>
            <div className="space-y-4 text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lucknow,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-green-500 transition"
              >
                <HiLocationMarker className="text-green-500 text-xl mt-1" />
                <span>Lucknow, India</span>
              </a>

              <a
                href="mailto:services@codevirussec.in"
                className="flex items-start space-x-3 hover:text-green-500 transition"
              >
                <HiMail className="text-green-500 text-xl mt-1" />
                <span>services@codevirussec.in</span>
              </a>

              <a
                href="tel:+919918103909"
                className="flex items-start space-x-3 hover:text-green-500 transition"
              >
                <HiPhone className="text-green-500 text-xl mt-1" />
                <span>+91 9918103909</span>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-500">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setOpenTerms(true); }}
                  className="hover:text-green-500 transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setOpenPrivacy(true); }}
                  className="hover:text-green-500 transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#161b22] mt-12 pt-6 flex flex-col sm:flex-row 
                        justify-between items-center text-sm text-gray-400 gap-3">
          <p>© {currentYear} CodevirusSecurity. All Rights Reserved.</p>

          <div className="flex space-x-5">
            <span
              onClick={() => setOpenTerms(true)}
              className="cursor-pointer hover:text-green-500 transition"
            >
              Terms
            </span>
            <span
              onClick={() => setOpenPrivacy(true)}
              className="cursor-pointer hover:text-green-500 transition"
            >
              Privacy
            </span>
          </div>
        </div>
      </div>

      <TnC open={openTerms} onClose={() => setOpenTerms(false)} />
      <Privacy open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </footer>
  );
};

export default Footer;
