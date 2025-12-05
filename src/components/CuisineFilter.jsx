import React from 'react';
import './CuisineFilter.css';

export default function CuisineFilter({ cuisines, selected, onSelect }) {
    return (
        <div className="cuisine-filter-container container">
            <div className="cuisine-scroll">
                <button
                    className={`cuisine-pill ${selected === 'All' ? 'active' : ''}`}
                    onClick={() => onSelect('All')}
                >
                    All
                </button>
                {cuisines.map(cuisine => (
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
