import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './Hero.css';

export default function Hero({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <img
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1920"
                    alt="Culinary World"
                    className="hero-image"
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="container hero-content animate-fade-in">
                <h1 className="hero-title">Experience the <span className="text-highlight">World</span> on Your Plate</h1>
                <p className="hero-subtitle">Discover authentic recipes, master global cuisines, and bring the flavors of the world to your kitchen.</p>

                <form className="hero-search-form" onSubmit={handleSearch}>
                    <div className="search-input-wrapper glass-panel">
                        <Search className="search-icon" size={24} />
                        <input
                            type="text"
                            placeholder="What are you craving? (e.g. Pasta, Tacos, Spicy...)"
                            className="search-input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary search-btn">Explore</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
