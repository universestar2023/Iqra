import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/Iqralogo.png";

function Footer() {
  return (
    <section id='foot'>
    <footer className="bg-gray-950 py-8 md:py-12 text-white">
      <div className="container max-w-7xl px-8 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* First Section: Logo and Description */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Acme Inc" className="h-50 w-40" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-400">
            Unlock your potential with our career guidance solutions. Gain access to valuable resources, personalized assessments, and expert advice to guide your decisions and shape your future after school and beyond.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                <TwitterIcon className="h-5 w-5 mt-1 text-white" />
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                <FacebookIcon className="h-5 w-5 mt-1 text-white" />
              </Link>
              <Link href="#" className="hover:underline " prefetch={false}>
                <LinkedinIcon className="h-5 w-5 mt-1 text-white" />
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                <InstagramIcon className="h-5 w-5 mt-1 text-white" />
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                <YouTubeIcon className="h-5 w-5 mt-1 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Second Section: Quick Links, Resources, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-orange-500">Quick Links</h4>
            <Link href="#" className="hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Plans
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              FAQ
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-orange-500">Resources</h4>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Guides
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Support
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-orange-500">Contact</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: iqra@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl flex flex-col items-center justify-center px-4 md:px-4 mt-8">
        <div className="w-full border-t border-gray-700 pt-5" />
        <div className="text-center text-xs py-1 m-0">
          &copy; 2024 IQRA. All rights reserved.
        </div>
      </div>
    </footer>
    </section>
  );
}

function TwitterIcon(props) {
  return (
    <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    fill="currentColor" 
    class="bi bi-twitter-x" 
    viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
  );
}

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>

function YouTubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.77 4.8C19.1 4.5 12 4.5 12 4.5s-7.1 0-8.77.3A2.78 2.78 0 0 0 1.46 6.42 29.08 29.08 0 0 0 1 12a29.08 29.08 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.23 19.2c1.67.3 8.77.3 8.77.3s7.1 0 8.77-.3a2.78 2.78 0 0 0 1.77-1.62A29.08 29.08 0 0 0 23 12a29.08 29.08 0 0 0-.46-5.58z"></path>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default Footer;
