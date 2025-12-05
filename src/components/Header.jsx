import React from 'react';
import { ChefHat, Search, Globe } from 'lucide-react';
import './Header.css';

export default function Header() {
    return (
        <header className="header glass-panel">
            <div className="container header-content">
                <div className="logo">
                    <ChefHat className="logo-icon" size={32} />
                    <span className="logo-text">SavorGlobal</span>
                </div>
                <nav className="nav">
                    <a href="#" className="nav-link">Cuisines</a>
                    <a href="#" className="nav-link">Popular</a>
                    <a href="#" className="nav-link">About</a>
                </nav>
                <div className="header-actions">
                    <button className="btn-icon">
                        <Search size={20} />
                    </button>
                    <button className="btn-icon">
                        <Globe size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}
