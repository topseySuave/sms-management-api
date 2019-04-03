## SMS management API
A simple API system for sms management. Visit the hosted version [here](https://sms-api.topseysuave.now.sh)

### API Documentation
Visit [here](https://documenter.getpostman.com/view/2928491/S1EH21Zo) to see the documentation for this API

## How To Make it work
1. Install [`node`](https://nodejs.org/en/download/)
2. Install [`mongodb`](https://docs.mongodb.com/v3.2/installation/)
3. Clone the repository `git clone git@github.com:topseySuave/sms-management-api.git`
4. Navigate to the project directory `cd ~/path/to/sms-management-api`
5. Install all dependencies `npm install`
6. Configure Mongo
7. Add your environment variables to .env files
```
SERVER=127.0.0.1:27017
DATABASE_NAME=<DB Name>
NODE_ENV=development
```
7. Start the app `npm run dev`
8. Navigate to the API home `http://localhost:3000/api/v1/`

### Other features are
#### Versioning:
##### The API routes and controllers are versioned for backward compactability
