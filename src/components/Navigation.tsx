'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>MATASUKE</h1>
          <p className="nav-subtitle">Web Developer</p>
        </div>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#works" onClick={() => setIsMenuOpen(false)}>Works</a></li>
          <li><a href="#service" onClick={() => setIsMenuOpen(false)}>Service</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand h1 {
          color: #2c3e50;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
        }

        .nav-subtitle {
          color: #7f8c8d;
          font-size: 0.8rem;
          margin: 0;
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .nav-toggle span {
          width: 25px;
          height: 3px;
          background: #2c3e50;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 3px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-menu a {
          text-decoration: none;
          color: #2c3e50;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }

        .nav-menu a:hover {
          color: #3498db;
        }

        .nav-menu a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 50%;
          background: #3498db;
          transition: all 0.3s;
          transform: translateX(-50%);
        }

        .nav-menu a:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 1rem;
          }

          .nav-toggle {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background: rgba(255, 255, 255, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            backdrop-filter: blur(10px);
            padding: 2rem 0;
            gap: 1rem;
          }

          .nav-menu-active {
            left: 0;
          }

          .nav-menu a {
            font-size: 1.1rem;
            padding: 0.5rem 0;
            display: block;
          }
        }
      `}</style>
    </nav>
  )
}