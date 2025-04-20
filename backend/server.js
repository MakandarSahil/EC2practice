const express = require('express');
const app = express();
const PORT = 3000;

// Sample movies data
const movies = [
  {
    id: 1,
    title: "3 Idiots",
    director: "Rajkumar Hirani",
    year: 2009,
    rating: 8.4,
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    id: 3,
    title: "KGF Chapter 2",
    director: "Prashanth Neel",
    year: 2022,
    rating: 8.2,
    image: "https://upload.wikimedia.org/wikipedia/en/3/3d/K.G.F_Chapter_2.jpg"
  }
];


// Default route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Movies API route
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Bind to all interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
