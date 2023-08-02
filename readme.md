# Weather API using Express.js

This is a simple Weather API built with Express.js, which provides weather information based on city names. The API utilizes the OpenWeatherMap API to fetch weather data.

## Prerequisites

Before running the Weather API, make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the Weather API:

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-APP.git
cd weather-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory of the project and add the following line:

```plaintext
API_KEY=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your actual OpenWeatherMap API key.

4. Run the API:

```bash
npm start
```

The server will start running at `http://localhost:3000`.

## Endpoints

The Weather API provides the following endpoint:

### Get Weather by City Name

- **URL:** `/weather`
- **Method:** GET
- **Query Parameters:**
  - `city`: (required) The name of the city for which weather information is requested.
- **Response:**
  The API will respond with a JSON object containing weather information for the specified city, including temperature, description, and weather icon.

## Example Usage

To get weather information for a specific city, make a GET request to the `/weather` endpoint with the `city` query parameter:

```plaintext
GET http://localhost:3000/weather?city=London
```

The API will respond with a JSON object like this:

```json
{
  "city": "London",
  "temperature": 22.5,
  "description": "Cloudy",
  "icon": "04d"
}
```

## Error Handling

If the API encounters any errors while fetching weather data, it will respond with an error message in the JSON format:

```json
{
  "error": "City not found"
}
```
