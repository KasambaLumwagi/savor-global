import React from 'react';
import './CuisineFilter.css';

const CUISINES = ["All", "Italian", "Japanese", "Mexican", "Indian", "French", "Thai", "Greek", "Chinese"];

export default function CuisineFilter({ selected, onSelect }) {
    return (
        <div className="cuisine-filter-container container">
            <div className="cuisine-scroll">
                {CUISINES.map(cuisine => (
                    <button
                        key={cuisine}
                        className={`cuisine-pill ${selected === cuisine ? 'active' : ''}`}
                        onClick={() => onSelect(cuisine)}
                    >
                        {cuisine}
                    </button>
                ))}
            </div>
        </div>
    );
}
