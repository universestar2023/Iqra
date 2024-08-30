import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const footerStyle = {
        background: 'linear-gradient(to right, #868f96 0%, #596164 100%)',
        borderTop: '1px solid #d1d5db',
        paddingTop: '2rem',
        paddingBottom: '3rem',
      };

  return (
    <footer style={footerStyle}>
      <div className="text-white container flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <p className="text-muted-foreground">
            Acme Inc is a leading provider of innovative solutions for businesses of all sizes.
          </p>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Resources</h4>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              FAQ
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Legal</h4>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-sm font-medium">Social</h4>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              GitHub
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Instagram
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  )
};

function MountainIcon(props) {
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }


export default Footer
