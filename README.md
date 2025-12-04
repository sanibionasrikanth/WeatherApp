🌤️ Weather App:

A simple and responsive Weather Application built using HTML, CSS, and JavaScript.
It fetches real-time weather data using an external API and displays temperature, weather status.

🚀 Features:

Search weather by city name

Shows:

🌡️ Temperature

💧 Humidity

🌬️ Wind Speed

🌥️ Weather Condition

Weather icons

Clean and simple UI

Fast API call using JavaScript fetch()

Fully responsive design

🛠️ Technologies Used:

HTML5

CSS3

JavaScript (ES6)

OpenWeatherMap API (or your API of choice)

📂 Project Structure:

weatherapp/

│── images/
│     ├── image1.png
│     ├── image2.png
│     └── logo.png
│
│── index.html
│── styles.css
│── script.js
│── README.md

⚙️ How It Works:

Uses fetch() to call the API:

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)

Parses JSON data and updates the UI dynamically

Displays icons based on weather condition

