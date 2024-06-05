# NASA Space Mission Controll App 

## Description:
This project is a convenient manager for tracking space missions conducted under the auspices of NASA. The application utilizes the public API of SpaceX missions. Each user can create/delete their own mission, and information about it will be available in the "History" and "Upcoming" sections alongside SpaceX missions, according to the mission's status.

## Features:
- Each user can view a list of missions conducted under SpaceX and NASA's auspices throughout history.
- Each user can create their own mission.
- Each user can delete both their own mission and a planned SpaceX mission.

## Technologies:
- Express: a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- MongoDB: a source-available, cross-platform, document-oriented database program.
- Mongoose: a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment.
- pm2: a process manager for the JavaScript runtime Node.js.
- csv-parse: a parser converting CSV text input into arrays or objects.
- Jest: a widely-used testing framework for JavaScript and TypeScript applications, ensuring code reliability through unit and integration tests.
- Docker: a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
- GitHub Actions: a continuous integration and continuous delivery (CI/CD) platform that allows to automate build, test, and deployment pipeline.
- React: a free and open-source front-end JavaScript library for building user interfaces based on components.
- Axios: a promise-based HTTP Client for Node.js and the browser.

## Getting Started:
1. Clone the repository to your local machine.
2. Ensure that Node.js is installed.
3. Create a `.env` file in the server folder and fill it according to the example for connecting to Mongo Atlas:
```javascript
PORT=your_port
MONGO_URL=your_mongo_atlas_url
```
4. Install all dependencies using the command `npm install` in the root of your project. This command includes subcommands for both the client and server sides of the application.
5. Start your project using the command `npm run deploy`. This command builds the client part of the project and places it in the `public` folder of the server part, then starts the server part of the project. Here's how the command looks in full:
```javascript
npm run build --prefix client && npm start --prefix server
```
6. After that, you can launch the project locally at: `localhost:8000` and add a new mission to the existing list.

## Docker:
1. Ensure that the latest version of Docker is installed on your computer.
2. Run the command `docker build -t your_image_tag_name .` to create a Docker image with all dependencies of your project in Docker (e.g., `docker build -t nasa-app .`).
3. Run the command `docker run -it -p host_port:docker_port your_image_tag_name` to launch a Docker container based on the generated Docker image (e.g., `docker run -it -p 8000:8000 nasa-app`). Use the same port that you wrote in your `.env` file.

## Testing:
To run automated tests, execute the following command:
```javascript
npm test
```
This command, in turn, will run the following subcommands in the appropriate order:
- `npm test --prefix server`: runs tests for the server side
- `npm test --prefix client`: runs tests for the client side

## Global deploy

Current application is deployed using AWS and ES2 and can be accessible via the following link: [nasa-mission-app](http://13.60.80.149:8000)


## API Endpoints

Here are the routes that can be used for routing in the app.

### _Launches_

### Get All Movies

- Method: **GET**
- URL: {{URL}}/v1/launches
- Description: This endpoint allows users to get list of all launches.

### Create The New Launch

- Method: **POST**
- URL: {{URL}}/v1/launches
- Data:
```javascript
{
    "mission": "Up and Away!",
    "rocket": "ZTM Starship IS1",
    "target": "Kepler-62 f",
    "launchDate": "January 17, 2028"
}
```
- Description: This endpoint allows users to create new launch.

### Delete The Launch By Id

- Method: **DELETE**
- URL: {{URL}}/v1/launches/:id
- Description: This endpoint allows users to delete launch by ID.

### Get All Planets

- Method: **GET**
- URL: {{URL}}/v1/planets
- Description: This endpoint allows users to get list of all habitable planets.
