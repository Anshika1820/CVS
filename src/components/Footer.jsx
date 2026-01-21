import React, { useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import TnC from "../components/TnC";
import Privacy from "../components/Privacy";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">

      {/* soft green glow (vercel safe) */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent pointer-events-none" />

      {/* top accent line */}
      <div className="relative h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14">

        {/* main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">

          {/* company info */}
          <div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We help organizations strengthen their security posture through
              vulnerability assessments, penetration testing, and proactive risk
              management strategies.
            </p>

            <div className="flex justify-center sm:justify-start space-x-4">
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
                  className="w-10 h-10 bg-[#0b1220] border border-[#161b22]
                             rounded-full flex items-center justify-center
                             hover:bg-green-500 hover:border-green-500
                             transition-all duration-300"
                >
                  <span className="text-gray-300 hover:text-black">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* location */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-500">
              Location
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <HiLocationMarker className="text-green-500 text-xl" />
                <span>Lucknow, India</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <HiMail className="text-green-500 text-xl" />
                <span>services@codevirussec.in</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3">
                <HiPhone className="text-green-500 text-xl" />
                <span>+91 9918103909</span>
              </div>
            </div>
          </div>

          {/* useful links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-green-500">
              Useful Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <span
                  onClick={() => setOpenTerms(true)}
                  className="cursor-pointer hover:text-green-500 transition"
                >
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span
                  onClick={() => setOpenPrivacy(true)}
                  className="cursor-pointer hover:text-green-500 transition"
                >
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#161b22]
                        flex flex-col sm:flex-row
                        justify-between items-center
                        text-sm text-gray-500 gap-3 text-center">

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
