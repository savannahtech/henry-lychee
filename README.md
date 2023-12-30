# Lychee Outro Generator
This project allows users to generate outro videos with captions for the Lychee platform. The project consists of a React frontend and a Node.js backend that uses FFmpeg for video generation.

![Lychee Outro Video UI](https://res.cloudinary.com/dwa7zorf5/image/upload/v1703856149/bcr18z2hca5q8l7vlzk6.png)

## Prerequisites
- Node.js (>=18)
- Docker (optional, for containerization)
- Remember to run Docker commands with administrator privileges

## Getting Started
### Clone the Repository
``` git clone https://github.com/savannahtech/henry-lychee.git```

``` cd henry-lychee ```

#### Install Dependencies for  backend
`cd lychee-outro-api`

`npm install`

#### Install Dependencies for  frontened
`cd lychee-outro-client`

`npm install`

#### Alternatively you can use Docker to install dependencies (ensure you have Docker installed)
`docker-compose build.`

### Run the application
### Option 1: Without Docker
1.Run the backend (Node.js server)

```cd lychee-outro-api```

```npm start```

2.In a separate terminal, run the frontend (React app):

```cd lychee-outro-client```

```npm start```

### Option 2: With Docker
```docker-compose up```

### Access the Application
- Frontend: Open your browser and go to `http://localhost:3000` 

- Backend: The Node.js server is running at `http://localhost:3001`
    
### Customize Outro Generation
- Customize the Outro details through the provided UI.

- The generated outro video will be saved in the `output-outro` folder in the `lychee-outro-api` folder .

### Addtional Notes
- If using Docker, you can adjust Dockerfile and docker-compose.yml as needed.
- Ensure that ports 3000 and 3001 are available on your machine.


