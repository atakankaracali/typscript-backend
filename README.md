# E-commerce Backend

This is the backend for the E-commerce project built with TypeScript, Express, TypeORM, and PostgreSQL.

## Prerequisites

- Node.js
- Docker

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
DB_HOST=db
DB_PORT=5432
DB_USERNAME=yourusername
DB_PASSWORD=yourpassword
DB_DATABASE=yourdatabase
```

## Installation
1. Clone the repository:

```sh
git clone https://github.com/yourusername/yourrepository.git
```
```sh
cd yourrepository
```
2. Install dependencies:

```sh
npm install
```

## Running the Application

Using Docker

1. Build and start the Docker containers:

```sh
docker-compose up --build
```
2. The application will be available at http://localhost:3000.

## Without Docker

1. Start the PostgreSQL server and create the database.
2. Ensure the environment variables in the .env file are correctly configured.
3. Run the application:

```sh
npm start
```
## Testing

To run the tests, use the following command:

```sh
npm test
```

## API Endpoints

GET /products: Brings all products.

GET /products/:id: Brings a specific product.

POST /products: A new product is formed.

PUT /products/:id: Updates a specific product.

DELETE /products/:id: Deletes a specific product.


## Project Structure

src/ - Source files

dist/ - Compiled files

node_modules/ - Node.js dependencies

docker-compose.yml - Docker configuration

Dockerfile - Docker image configuration

.env - Environment variables


## License

MIT
