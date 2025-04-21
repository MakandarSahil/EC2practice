const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// Sample movies data
const movies = [
  {
    id: 1,
    title: "3 Idiots",
    director: "Rajkumar Hirani",
    year: 2009,
    rating: 8.4,
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
  },
  {
    id: 3,
    title: "KGF Chapter 2",
    director: "Prashanth Neel",
    year: 2022,
    rating: 8.2,
    image: "https://upload.wikimedia.org/wikipedia/en/3/3d/K.G.F_Chapter_2.jpg",
  },
  {
    id: 4,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
  },
  {
    id: 5,
    title: "Dangal",
    director: "Nitesh Tiwari",
    year: 2016,
    rating: 8.4,
    image: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
  },
  {
    id: 6,
    title: "Shershaah",
    director: "Vishnuvardhan",
    year: 2021,
    rating: 8.3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/df/Shershaah_Poster.jpg",
  },
  {
    id: 7,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
  },
  {
    id: 8,
    title: "PK",
    director: "Rajkumar Hirani",
    year: 2014,
    rating: 8.1,
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
  },
  {
    id: 9,
    title: "Bahubali: The Beginning",
    director: "S. S. Rajamouli",
    year: 2015,
    rating: 8.0,
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Baahubali_The_Beginning_poster.jpg",
  },
  {
    id: 10,
    title: "Bahubali: The Conclusion",
    director: "S. S. Rajamouli",
    year: 2017,
    rating: 8.2,
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Baahubali_the_Conclusion.jpg",
  },
  {
    id: 11,
    title: "Jawan",
    director: "Atlee",
    year: 2023,
    rating: 7.4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4e/Jawan_film_poster.jpg",
  },
  {
    id: 12,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    rating: 8.0,
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
  },
  {
    id: 13,
    title: "Gully Boy",
    director: "Zoya Akhtar",
    year: 2019,
    rating: 7.9,
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7a/Gully_Boy_poster.jpg",
  },
  {
    id: 14,
    title: "Pushpa: The Rise",
    director: "Sukumar",
    year: 2021,
    rating: 7.6,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Pushpa_-_The_Rise_%282021_film%29.jpg",
  },
  {
    id: 15,
    title: "Drishyam",
    director: "Nishikant Kamat",
    year: 2015,
    rating: 8.2,
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ea/Drishyam_2015_poster.jpg",
  },
  {
    id: 16,
    title: "Avengers: Endgame",
    director: "Anthony and Joe Russo",
    year: 2019,
    rating: 8.4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  },
  {
    id: 17,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001,
    rating: 8.6,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Spirited_Away_poster.JPG",
  },
  {
    id: 18,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    rating: 9.3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
  },
  {
    id: 19,
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    rating: 8.8,
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
  },
  {
    id: 20,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    rating: 8.8,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  },
  {
    id: 21,
    title: "The Matrix",
    director: "Lana and Lilly Wachowski",
    year: 1999,
    rating: 8.7,
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  },
  {
    id: 22,
    title: "Jab We Met",
    director: "Imtiaz Ali",
    year: 2007,
    rating: 7.9,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Jab_We_Met_Poster.jpg",
  },
  {
    id: 23,
    title: "Zindagi Na Milegi Dobara",
    director: "Zoya Akhtar",
    year: 2011,
    rating: 8.1,
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Zindagi_na_milegi_dobara.jpg",
  },
  {
    id: 24,
    title: "Barfi!",
    director: "Anurag Basu",
    year: 2012,
    rating: 8.1,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Barfi%21_poster.jpg",
  },
  {
    id: 25,
    title: "Swades",
    director: "Ashutosh Gowariker",
    year: 2004,
    rating: 8.2,
    image: "https://upload.wikimedia.org/wikipedia/en/3/3e/Swades_poster.jpg",
  },
  {
    id: 26,
    title: "Chhichhore",
    director: "Nitesh Tiwari",
    year: 2019,
    rating: 8.3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Chhichhore_Poster.jpg",
  },
  {
    id: 27,
    title: "12th Fail",
    director: "Vidhu Vinod Chopra",
    year: 2023,
    rating: 9.1,
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/70/12th_Fail_film_poster.jpg",
  },
  {
    id: 28,
    title: "Tamasha",
    director: "Imtiaz Ali",
    year: 2015,
    rating: 7.3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/Tamasha_%28film%29_Poster.jpg",
  },
  {
    id: 29,
    title: "Article 15",
    director: "Anubhav Sinha",
    year: 2019,
    rating: 8.2,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2a/Article_15_poster.jpg",
  },
  {
    id: 30,
    title: "Andhadhun",
    director: "Sriram Raghavan",
    year: 2018,
    rating: 8.2,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Andhadhun_poster.jpg",
  },
];

const path = require("path");
// app.use(express.static(path.join(__dirname, '../frontend')));

// Default route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Movies API route
app.get("/api/movies", (req, res) => {
  res.json(movies);
});

// Bind to all interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
