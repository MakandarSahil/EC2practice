
# 🎬 EC2 Movie App Setup Guide

This guide outlines the steps to deploy a full-stack Node.js movie application using AWS EC2, RDS, and S3.

---

## 🚀 1. EC2 Setup

### ✅ Launch EC2 Instance
- **OS:** Ubuntu 24.04 (64-bit x86)
- **Type:** `t2.micro` (Free Tier)
- **Storage:** 8 GB
- **Key Pair:** `my-key.pem`

### 🔐 Configure Security Group
Allow the following inbound rules:
- **Port 22 (SSH):** Your IP
- **Port 3000 (Custom TCP):** `0.0.0.0/0`
- **Port 80 (HTTP - optional):** `0.0.0.0/0`

### 🔑 SSH into EC2
```bash
chmod 400 my-key.pem
ssh -i my-key.pem ubuntu@<your-ec2-public-ip>
```

---

## 🛠️ 2. Setup Node.js Backend

### Install Dependencies
```bash
sudo apt update
sudo apt install nodejs npm git -y
```

### Clone Repository
```bash
git clone https://github.com/MakandarSahil/EC2practice.git
cd EC2practice/backend
```

### Modify `server.js`
- Add `/api/movies` route
- Add **CORS** support:

```js
const cors = require('cors');
app.use(cors());
```

### Start Server
```bash
node server.js
```

---

## 📡 3. Add Elastic IP

1. Go to **EC2 > Elastic IPs**
2. Allocate new Elastic IP
3. Associate it with your EC2 instance

### Access API
```
http://<elastic-ip>:3000/api/movies
```

---

## 🌐 4. Upload Frontend to S3

### Create S3 Bucket
1. Name: `ec2practicefrontend`
2. Uncheck "Block All Public Access" ✅
3. Upload `index.html`

### Enable Static Website Hosting
- **Index Document:** `index.html`

### Set Bucket Policy
```json
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
```

---

## 🗄️ 5. RDS MySQL Setup

### Create Database
1. Go to **RDS > Create Database**
2. Choose:
   - **Standard Create**
   - **Engine:** MySQL
   - **Edition:** Free tier
3. Settings:
   - **DB Identifier:** `moviedb`
   - **Username:** `admin`
   - **Password:** `yourpassword123`
4. Connectivity:
   - **VPC:** Default
   - **Public Access:** ✅ Yes
   - **Port:** `3306`

### Update RDS Security Group
1. Go to **EC2 > Security Groups**
2. Edit the **RDS security group**
3. Add **Inbound Rule**:
   - **Type:** MySQL/Aurora
   - **Port:** 3306
   - **Source:** Your EC2 security group (or `0.0.0.0/0` for testing)

---

## 💻 6. Connect EC2 to RDS

### Install MySQL Client
```bash
sudo apt install mysql-client -y
```

### Connect to DB
```bash
mysql -h <rds-endpoint> -u admin -p
```

### Create Database & Table
```sql
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
```

---

## 🔗 7. Backend Database Connection

### MySQL Connection Setup (Node.js)
```js
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
```

---

## 📞 Contact

For any queries, feel free to connect:  
[GitHub – MakandarSahil](https://github.com/MakandarSahil)
