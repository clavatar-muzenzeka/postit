# Postit

![Desktop](https://private-user-images.githubusercontent.com/58566371/297475489-b1cc8d25-9630-4ab8-9881-a1b589ac7534.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU1MTUzMTYsIm5iZiI6MTcwNTUxNTAxNiwicGF0aCI6Ii81ODU2NjM3MS8yOTc0NzU0ODktYjFjYzhkMjUtOTYzMC00YWI4LTk4ODEtYTFiNTg5YWM3NTM0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE3VDE4MTAxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI4YjUwZmNhMzU0MTNkZjUxZTBkODg5MTljNzExZDRmMzBiMTZlZDA4ODhmYmUwMTBkNWI1ZDRlYmQyOGU3NmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.TKOW4rUNmHpBRBwtI_SuiY-HjS49a_apXJNtLJL2ePI)

![Mobile](https://private-user-images.githubusercontent.com/58566371/297474267-c0b6a099-c59c-4d96-a08b-8d2234e2a9b5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDU1MTUwMzEsIm5iZiI6MTcwNTUxNDczMSwicGF0aCI6Ii81ODU2NjM3MS8yOTc0NzQyNjctYzBiNmEwOTktYzU5Yy00ZDk2LWEwOGItOGQyMjM0ZTJhOWI1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE3VDE4MDUzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZjMTFjNmI3YjYzN2QyNzRiYTE0ZTUyMTU4NzRiNGIyMmYxZDEwNDZkNzU2NDgxODU2NTc3MzU2OTgyNTdjMzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.KBMXib8-6uDOphtWYvKkCRNUtgdz422r6UJc80P7IqI)
## Overview

> This project was developed as part of a professional assessment

It is based on Next JS version 14, Node JS version 20.11.0, in typescript, with styles applied using the Tailwind CSS framework, from which we've taken advantage of responsiveness to deliver a suitable experience on different screen formats; and Mongo DB version 4.4.0. All these technologies are compacted in a Docker container to ensure portability.

The rest of the runtime and dev dependencies are included with their versions in the manifest package.json file at the root of the project.

On a modular level, the project includes a frontend module and a Rest Serverless API, offering the following functionalities:

- Consultation of a list of posts, including those coming from the [JSON Placeholder API](https://jsonplaceholder.typicode.com/), and those coming from the backend of this application suite, persisted in the Mongo DB database mentioned above.

- View the details of a given post (details of the user behind the post and the list of comments are also included). (Free access feature)

- Creation of a post, which is processed and persisted by the backend of this application suite (Functionality reserved for authenticated users).

- The addition of a comment, associated with a post originating from the [JSON Placeholder API](https://jsonplaceholder.typicode.com/) or from the API of this application suite.
 (Functionality reserved for authenticated users)

- User registration

- User authentication (based on credentials strategy and session management via JWT strategy)



## Project launch

Clone project with the command

`git clone git@github.com:clavatar-muzenzeka/postit.git`

There are two ways of doing this: via Docker (recommended) or manually

1. Launch via Docker image:

- Build the docker image described in the Dockerfile file located at the root of the project:

`docker build . --tag "cms" --file Dockerfile`

- Launch the image

`Docker run it <image_name>`

If all goes well, the application will be launched and listen on port 3000 of the localhost. Open the link http://localhost:3000 

- To run tests

`Docker run it <image_name> npm run test`

2. Launch the project manually:

To launch the project manually, you must have Node JS installed on your computer, in a version higher than version 18; and Mongo DB preferably in a version higher than version 4.4.

To do this, proceed as follows:

- Install dependencies using the npm command

`npm i -f`

- Launch the application

`npm run dev`

- To run tests

`npm run test`

**Contact Developer: mgeniclaver@gmail.com, +243817372196**