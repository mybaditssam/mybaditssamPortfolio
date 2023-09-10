import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Sam's Portfolio</p>
      <p>Powered by Coffee ☕ and Code 💻</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
