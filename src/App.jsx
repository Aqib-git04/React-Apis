import { useEffect, useState, Suspense } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(datas => {
        setData(datas.recipes);
        console.log(datas.recipes[0].image);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  <Suspense fallback={<div><h1>Loading recipes...</h1></div>}>
   
  </Suspense>

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-red-600 text-5xl mb-11 text-center">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ id, title, ingredients, instructions, image }) => (
          <div key={id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={image}
              alt={image}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Ingredients:</strong> {ingredients.join(', ')}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Instructions:</strong> {instructions}
            </p>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
