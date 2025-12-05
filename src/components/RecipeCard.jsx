import React from 'react';
import { Clock, BarChart, Star } from 'lucide-react';
import './RecipeCard.css';

export default function RecipeCard({ recipe, onClick }) {
    return (
        <div className="recipe-card" onClick={() => onClick(recipe)}>
            <div className="recipe-image-wrapper">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                <div className="recipe-cuisine-badge">{recipe.cuisine}</div>
            </div>
            <div className="recipe-content">
                <div className="recipe-header">
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <div className="recipe-rating">
                        <Star size={16} fill="var(--color-primary)" className="star-icon" />
                        <span>{recipe.rating}</span>
                    </div>
                </div>
                <p className="recipe-description">{recipe.description}</p>
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
