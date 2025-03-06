import React, { useState } from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'Certifications', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        background: 'transparent',
        position: 'absolute',
        top: 0,
        zIndex: 50,
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>NR</span>
          </div>

          {/* Desktop navigation links */}
          <div style={{ display: 'none', flexWrap: 'nowrap', alignItems: 'center' }}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: item.current ? 'white' : '#d1d5db',
                  padding: '8px 16px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  backgroundColor: item.current ? '#1f2937' : 'transparent',
                }}
              >
                {item.name}
              </a>
            ))}

            {/* Social Media Icons */}
            <div style={{ display: 'flex', marginLeft: '16px', borderLeft: '2px solid #4b5563', paddingLeft: '16px' }}>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#d1d5db', marginRight: '12px', display: 'flex', alignItems: 'center' }}
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#d1d5db', display: 'flex', alignItems: 'center' }}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#d1d5db',
              padding: '8px',
              cursor: 'pointer',
            }}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ padding: '8px 16px', backgroundColor: '#1f2937' }}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                display: 'block',
                color: '#d1d5db',
                padding: '8px 0',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              {item.name}
            </a>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'start' }}>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#d1d5db', marginRight: '12px' }}
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#d1d5db' }}
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
