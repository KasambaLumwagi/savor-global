import React from 'react';
import { X, Clock, BarChart, Users, ChevronRight } from 'lucide-react';
import './RecipeModal.css';

export default function RecipeModal({ recipe, onClose }) {
    if (!recipe) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-image-container">
                    <img src={recipe.image} alt={recipe.title} className="modal-image" />
                    <div className="modal-title-overlay">
                        <span className="modal-cuisine">{recipe.cuisine}</span>
                        <h2 className="modal-title">{recipe.title}</h2>
                    </div>
                </div>

                <div className="modal-body">
                    <div className="modal-info-bar">
                        <div className="info-item">
                            <Clock size={20} className="info-icon" />
                            <div>
                                <span className="info-label">Time</span>
                                <span className="info-value">{recipe.time}</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <BarChart size={20} className="info-icon" />
                            <div>
                                <span className="info-label">Difficulty</span>
                                <span className="info-value">{recipe.difficulty}</span>
                            </div>
                        </div>
                        <div className="info-item">
                            <Users size={20} className="info-icon" />
                            <div>
                                <span className="info-label">Calories</span>
                                <span className="info-value">{recipe.calories || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    <p className="modal-description">{recipe.description}</p>

                    {recipe.tips && (
                        <div className="recipe-tips">
                            <strong>Chef's Tip:</strong> {recipe.tips}
                        </div>
                    )}


                    <div className="modal-grid">
                        <div className="ingredients-section">
                            <h3 className="section-title">Ingredients</h3>
                            <ul className="ingredients-list">
                                {recipe.ingredients.map((ing, i) => (
                                    <li key={i} className="ingredient-item">
                                        <span className="bullet">•</span> {ing}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="instructions-section">
                            <h3 className="section-title">Instructions</h3>
                            <div className="instructions-list">
                                {recipe.instructions.map((step, i) => (
                                    <div key={i} className="instruction-step">
                                        <div className="step-number">{i + 1}</div>
                                        <p className="step-text">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
