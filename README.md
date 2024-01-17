# Postit

## Overview

> This project was developed as part of a professional assessment

It is based on Next JS version 14, Node JS version 20.11.0, sous le language typescript, avec le styles appliqués grâce au framework Taillwind CSS, duquel nous avons tiré profit des aspects responsives pour offrir une expérience convainable sur différents formats d'écran; and Mongo DB version 4.4.0. All these technologies are compacted in a Docker container to ensure postability.

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

`npm run test``

**Contact Developer: mgeniclaver@gmail.com, +243817372196**