import React from 'react';
import { Clock, BarChart, Star, Heart } from 'lucide-react';
import './RecipeCard.css';

export default function RecipeCard({ recipe, onClick, isFavorite, onToggleFavorite }) {
    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        onToggleFavorite(recipe.id);
    };

    return (
        <div className="recipe-card" onClick={() => onClick(recipe)}>
            <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                <div className="recipe-cuisine-badge">{recipe.cuisine}</div>
                <button
                    className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                    onClick={handleFavoriteClick}
                    title={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                </button>
            </div>
            <div className="recipe-content">
                <div className="recipe-header">
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <div className="recipe-rating">
                        <Star size={16} fill="var(--color-primary)" className="star-icon" />
                        <span>{recipe.rating}</span>
                    </div>
                </div>
                <p className="recipe-description line-clamp-3">{recipe.description}</p>
                <div className="recipe-meta">
                    <div className="meta-item">
                        <Clock size={16} />
                        <span>{recipe.time}</span>
                    </div>
                    <div className="meta-item">
                        <BarChart size={16} />
                        <span>{recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
