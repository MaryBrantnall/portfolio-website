import React from 'react';
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
  return (
    <div className="min-h-screen bg-eggshell flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-zomp p-6 text-center text-white">
          <h1 className="text-3xl mb-2">Contact Me</h1>
          <p className="text-ash_gray">Let's connect and collaborate!</p>
        </div>

        {/* Contact Info Section */}
        <div className=" p-8 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="text-zomp mt-1">
            <SocialIcon bgColor="#E58241" url="email" />
            </div>
            <div>
              <h3 className="font-semibold text-reseda_green">Email</h3>
              <a 
                href="mailto:marybrantnall@gmail.com" 
                className="text-brunswick_green hover:text-persian_orange transition-colors"
              >
                marybrantnall@gmail.com
              </a>
            </div>
          </div>


          {/* Social Links */}
          <div className="pt-4">
            <h3 className="font-semibold text-reseda_green mb-3">Social Profiles</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/marybrantnall/"
                className="bg-brunswick_green text-eggshell p-3 rounded-full hover:bg-zomp transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MaryBrantnall"
                className="bg-brunswick_green text-eggshell p-3 rounded-full hover:bg-zomp transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Optional Location */}
          <div className="pt-4">
            <h3 className="font-semibold text-reseda_green">Location</h3>
            <p className="text-brunswick_green">Halifax, Canada</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
