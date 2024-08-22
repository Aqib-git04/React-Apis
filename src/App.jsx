import { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import Modal from './Modal';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        setData(response.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);

  const handleViewMore = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-red-600 text-5xl mb-11 text-center">Recipes</h1>

      {/* Ternary Operator for Conditional Rendering */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader"> <h1>Loading...</h1></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                onClick={() => handleViewMore(recipe)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Show the Modal if a recipe is selected */}
      {selectedRecipe && (
        <Modal
          title={selectedRecipe.title}
          ingredients={selectedRecipe.ingredients}
          instructions={selectedRecipe.instructions}
          image={selectedRecipe.image}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
