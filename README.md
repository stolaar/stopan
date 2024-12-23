## N Elevators Problem Solution
This repository provides a solution to the N elevators problem using NestJS on the backend and Vue.js on the frontend. The system simulates the operation of multiple elevators within a building, handling real-time requests and state management.

![Elevator Simulation](./examples/n-elevators.gif)

### Overview
 - Backend (NestJS):

    - Manages the building state, including the number of floors and elevator operations (e.g., requesting elevators, adding passengers).
    - Includes a WebSocket gateway to broadcast real-time elevator statuses so the frontend can render the transitions effectively.
    - Exposes an endpoint for fetching the initial state of the building.

 - Frontend (Vue.js):

    - Displays the building and elevators, allowing users to request an elevator for any floor and specify the target floor.
    - Uses real-time updates from the backend WebSocket to animate and visualize elevator movements.

### Configuration
The number of elevators, number of floors, elevator transition time, and the option to run a simulation with random passengers on random floors can be configured using environment variables.

Copy the environment file before running the application:
``` bash
cp ./apps/api/.env.example ./apps/api/.env
```

### Starting the Applications
To start both the frontend and backend applications, run:


```bash
yarn dev
```
 - Frontend (Vue.js): Exposed at http://localhost:3000
 - Backend (NestJS): Exposed at http://localhost:5000

### Running Unit Tests
To run the unit tests for the backend service, use:

```bash
yarn workspace api test
```

#### Additional Notes
 - WebSocket Integration: The backend WebSocket gateway sends real-time updates on elevator status changes to the frontend, ensuring smooth visualization of the simulation.
 - Initial State Endpoint: The backend provides an initial state endpoint that the frontend can use to initialize the building and elevators.
 - Feel free to customize the configuration and extend the solution as needed!
