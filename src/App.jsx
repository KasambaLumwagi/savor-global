import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CuisineFilter from './components/CuisineFilter';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import { recipes } from './data/recipes';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
      return matchesSearch && matchesCuisine;
    });
  }, [searchTerm, selectedCuisine]);

  return (
    <div className="app">
      <Header />
      <Hero onSearch={setSearchTerm} />

      <main>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Curated Recipes</h2>
            <p style={{ color: '#666' }}>Select a cuisine or scroll to explore</p>
          </div>
        </div>

        <CuisineFilter selected={selectedCuisine} onSelect={setSelectedCuisine} />

        <div className="container" style={{ paddingBottom: '4rem' }}>
          <div className="grid-cols-auto">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={setSelectedRecipe}
                />
              ))
            ) : (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: '#888' }}>
                No recipes found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer style={{ background: 'var(--color-secondary)', color: 'var(--color-white)', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}>SavorGlobal</h3>
          <p style={{ opacity: 0.7 }}> bringing the world to your kitchen.</p>
          <p style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.875rem' }}>© 2024 SavorGlobal. All rights reserved.</p>
        </div>
      </footer>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;
