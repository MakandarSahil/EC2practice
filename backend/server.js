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
  /*


1)1. EC2 SETUP
  Launch EC2 instance
    OS: Ubuntu 24.04 (64-bit x86)
    Type: t2.micro (free tier)
  Storage: 8GB
    Key Pair: my-key.pem
    Configure Security Group
  Allow:
    Port 22 (SSH) – Your IP
    Port 3000 (Custom TCP) – 0.0.0.0/0
    Port 80 (optional for HTTP)
  SSH into EC2 instance
     chmod 400 my-key.pem
     ssh -i my-key.pem ubuntu@ec2-xx-xxx-xxx-xxx.us-east-2.compute.amazonaws.com

  2. Setup Node.js Backend
      sudo apt update
      sudo apt install nodejs npm git -y
      git clone https://github.com/MakandarSahil/EC2practice.git
      cd EC2practice/backend
      
      Modify server.js:
      Add /api/movies route
      Include CORS

      const cors = require('cors');
      app.use(cors());

      run server.js - node server.js

    3. Add Elastic IP
      Go to EC2 → Elastic IPs
      Allocate new Elastic IP
      Associate it with your instance
      Use this IP to access:

      http://<elastic-ip>:3000/api/movies



2)Upload Frontend to S3
  Go to S3 Console → Create Bucket
  Name: ec2practicefrontend
  Uncheck: Block Public Access ✅
  Upload index.html
  Enable Static Website Hosting:
  Index document: index.html
  Set Bucket Policy to allow public access:
    {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ec2practicefrontend/*"
    }
    ]
  }



3)RDS mysql setup
1) go to RDS console
2) click create database
3) choose - 
  Standard Create
  Engine: MySQL
  Edition: Free tier
4) settings -
  DB identifier: moviedb
  Username: admin
  Password: yourpassword123
5)conntectivity -
  VPC: Default
  Public Access: ✅ Yes
  Port: 3306 (default)
6) click create database

 2. Update RDS Security Group
    -Go to EC2 → Security Groups
    -Edit the security group attached to your RDS instance
    -Add Inbound Rule:
    -Type: MySQL/Aurora
    -Port: 3306
    -Source: ✅ your EC2 security group (or 0.0.0.0/0 for quick testing)

1 in ec2 terminal
sudo apt install mysql-client -y
Get your RDS Endpoint from console
3 Connect to DB:
mysql -h <rds-endpoint> -u admin -p
4  Create DB + Table + Insert Movies
CREATE DATABASE movies;

USE movies;

CREATE TABLE movie (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  director VARCHAR(255),
  year INT,
  rating FLOAT,
  image TEXT
);

INSERT INTO movie (title, director, year, rating, image) VALUES
('3 Idiots', 'Rajkumar Hirani', 2009, 8.4, 'https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg'),
('Interstellar', 'Christopher Nolan', 2014, 8.6, 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg');


const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '<your-rds-endpoint>',
  user: 'admin',
  password: 'yourpassword123',
  database: 'movies'
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to RDS");
  }
});

*/
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
