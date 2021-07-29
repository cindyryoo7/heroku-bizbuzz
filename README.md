# BizBuzz - Find the *buzz* about your local *biz*. #

## Table of Contents

1. [Description](#Description)
2. [Installation](#Installation)
3. [Technology Stack](#Technology-Stack)
4. [Project Requirements](#Project-Requirements)
5. [Architectural Overview](#Architectural-Overview)
6. [User Flow and Views](#User-Flow-and-Views)
7. [API Expected Behavior](#API-Expected-Behavior)
8. [Design Decisions](#Design-Decisions)
9. [Challenges and Reflections](#Challenges-and-Reflections)
10. [Planning Resources](#Planning-Resources)

## Description
BizBuzz is a web application that shows local business details and reviews based on a current user's location. This project utilizes the [Yelp Fusion API](https://www.yelp.com/developers/v3/manage_app) and [Google Maps Platform API](https://console.cloud.google.com/project/_/google/maps-apis/credentials). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Heroku deployed version of the application can be viewed [here](https://cindyryoo-bizbuzz.herokuapp.com/).

## Installation
To run on development mode on your local machine:
### 1. Clone the repository.
- In your command shell, run:
  ```sh
  git clone https://github.com/cindyryoo7/bizbuzz.git
  ```
### 2. Obtain Yelp Fusion API Key.
- Follow the instructions inside `.env-copy.ts` to create your personal Yelp Fusion API key.
### 3. Obtain Google Maps Platform API Key.
- Follow the instructions inside `client > src > .env-copy.ts` to create your personal Google Maps Platform API key.
### 4. Install client dependencies and start up React client.
- In your command shell, run:
  ```sh
  cd client
  ```
- Then run:
  ```sh
  npm install
  ```
- Then run:
  ```sh
  npm start
  ```
### 5. Install server dependencies and start up Node.js server.
- In your command shell, run:
  ```sh
  npm install
  ```
- Then run:
  ```sh
  npm start
  ```
### 6. View application on browser.
- Once both the client and server have started, you can view the running application at `localhost:3000`.

## Technology Stack
| Type | Technologies |
| --- | --- |
| Frontend | <img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=000000"> <img src="https://img.shields.io/badge/-TypeScript-3078c6?style=flat&logo=typescript&logoColor=ffffff"> <img src="https://img.shields.io/badge/-React-000000?style=flat&logo=react&logoColor=00c8ff"> <img src="https://img.shields.io/badge/-React%20Router-000000?style=flat&logo=react%20router&logoColor=ca4245"> <img src = "https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/-Material--UI-01aaf6?style=flat&logo=material-ui&logoColor=white"> |
| Backend | <img src="https://img.shields.io/badge/-Node.js-3C873A?style=flat&logoColor=white"> <img src="https://img.shields.io/badge/-Express.js-787878?style=flat"> |
| Developer Tools | <img src="https://img.shields.io/badge/-Git-F1502F?style=flat&logo=git&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Github-000000?style=flat&logo=github&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual%20studio%20code&logoColor=white"> <img src="https://img.shields.io/badge/-npm-c43635?style=flat&logo=npm&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Agile-000000?style=flat&logo=agile&logoColor=FFFFFF"> |
| Planning | <img src="https://img.shields.io/badge/-JIRA-2580f7?style=flat&logo=jira&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Kanban-3C873A?style=flat&logoColor=FFFFFF"> <img src="https://img.shields.io/badge/-Figma-f86e5f?style=flat&logo=figma&logoColor=FFFFFF"> |
| External APIs | <img src="https://img.shields.io/badge/-Yelp%20Fusion%20API-cc2222?style=flat&logo=yelp&logoColor=white"> <img src="https://img.shields.io/badge/-Google%20Maps%20Platform%20API-3f81ec?style=flat&logo=google%20maps&logoColor=white"> |
| Deployment | <img src="https://img.shields.io/badge/-Heroku-8b6baf?style=flat&logo=heroku&logoColor=FFFFFF"> |

## Project Requirements
### 1. Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
This project was created using React.js and TypeScript. Specifically, the frontend client was created using [Create React App](https://github.com/facebook/create-react-app).
### 2. Create an application that can be interacted with in a minimum of three different ways by the user.
The user can interact with the app in the following ways:
- search for businesses based on user's current location (using geocoordinates)
- search for businesses based on a specific physical location (e.g. San Francisco, CA)
- click on a business in the list of results, which redirects the user to a page containing the business' details and reviews
- interact with the Google map (e.g. zoom in and out)
- click on a specific Yelp review, which redirects the user to the review on the official Yelp page
### 3. The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.).
This project uses an MVC (Model, View, Controller) architecture pattern. See [Architecture Overview](#Architecture-Overview) for more information.

### 4. Integration with a backend service developed by you.
This project runs on a Node.js/Express.js server.

### 5. Integration with a 3rd party RESTful API.
This project utilizes the following 3rd party RESTful APIs:
- [Yelp Fusion API](https://www.yelp.com/developers/v3/manage_app)
- [Google Maps Platform API](https://console.cloud.google.com/project/_/google/maps-apis/credentials)

The HTTP requests to the Yelp Fusion API can be found in `controlers > yelp.ts`.
The HTTP requests to the Google Maps Platform API are carried out through an external npm library called [google-maps-react](https://github.com/fullstackreact/google-maps-react).

### 6. Usage of at least 5 UI components from the material-ui/@core library if you’re using React or a comparable library if you’re using another framework.
This project utilizes the following material-ui/@core UI components:
- Avatar
- Box
- Card
- CardActionArea
- CardHeader
- Chip
- CircularProgress
- Divider
- IconButton
- ImageList
- ImageListItem
- Link
- Grid
- Paper
- Typography

It also utilizes the following theme-related components from the material-ui/@core library:
- createTheme
- makeStyles
- ThemeProvider

Lastly, it utilizes the following icons from the material-ui/icon library:
- DoneIcon
- LocationOnOutlinedIcon
- SearchIcon

### 7. An example of a reusable component that you have created and used in the app (e.g. UI component, service, etc).
The following components are reusable components that I have created and used in the app in several locations:
- Address
  - located in: `client > src > view-components > Address.tsx`
  - rendered by:
    - BusinessInfo
    - CardBody
- Categories
  - located in: `client > src > view-components > Categories.tsx`
  - rendered by:
    - BusinessInfo
    - CardFooter
- GoogleMap
  - located in: `client > src > controller-components > GoogleMap.tsx`
  - rendered by:
    - BusinessInfo
    - Homepage
- Ratings
  - located in: `client > src > view-components > Ratings.tsx`
  - rendered by:
    - BusinessInfo
    - CardHeader
    - Review
- Transactions
  - located in: `client > src > view-components > Transactions.tsx`
  - rendered by:
    - BusinessInfo
    - CardFooter

## Architectural Overview
<!-- TODO: A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models. Brief description of the architectural design pattern that you leveraged. -->
To follow the MVC (Model, View, Controller) architecture pattern, the React components were split into two categories:
- controller components, and
- view components.

The main distinction between the two types of components are that controller components are able to access or alter the application's state, often with the use of HTTP requests to the Express server.

The application has the following controller components:
- BusinessPageController: sends a GET request to the Express server to retrieve information about a single business such as details and reviews
- GoogleMapController: sends a GET request to the Google Maps Platform API to obtain access to a Google map and markers based on geocoordinates
- HomepageController: sends a GET request to the Express server to retrieve a list of businesses from the Yelp Fusion API based on either a physical location or geocoordinates
- SearchBarController: updates the location, which triggers a GET request inside the HomepageController

The rest of the components are view components, which are rendered by either controller components or other view components. Because the view components cannot alter the application's state, they are fairly reusable and only alter state for UI-specific data and behavior. The following is a breakdown of the flow of data in the application as well as a short purpose of each component:
```sh
AppGrid (view - renders whole app)
|- Routes (view - renders multiple pages in app and allows routing)
   |- Homepage (controller - renders list of businesses from Yelp API)
   |--|- SearchBar (controller - allows user to change location)
   |--|- BusinessList (view - renders list of business cards)
   |-----|- BusinessCard (view - renders details for a single business)
   |--------|- CardHeader (view - renders top portion of card such as name and ratings)
   |-----------|- Ratings (view - renders rating text and filled-in icons)
   |        |- CardBody (view - renders middle portion of card such as address and price)
   |           |- Address (view - renders location of business)
   |        |- CardFooter (view - renders bottom portion of card such as categories and transactions)
   |           |- Categories (view - renders a chip for each business cateogry)
   |           |- Transactions (view - renders a chip for each type of business transaction)
   |  |- GoogleMap (view - renders a Google map with a marker on the current location)
   |- BusinessPage (controller - renders business details and reviews from Yelp API)
   |  |- PhotoGallery (view - renders images in a row)
   |  |- BusinessDetails
   |     |- BusinessInfo
   |        |- Ratings
   |        |- Categories
   |        |- Transactions
   |        |- GoogleMap
   |        |- Address
   |        |- Schedule
   |     |- ReviewsList
   |        |- Review
   |           |- Ratings
```

All data models/types are located in `client > src > models`. These data models define the types of data that we expect to receive from the Express server or external REST APIs.


## User Flow and Views
This application features two main views:
- Homepage
  <img src="./client/src/assets/views-screenshots/homepage.png" />
- Business Page
  <img src="./client/src/assets/views-screenshots/businesspage.png" />

The following describes the general user flow in the application:
1. User navigates to homepage, which by default contains a list of businesses near San Francisco, CA, and a Google map with markers for each business in the list. The business list contains general information for each business such as:
  - name
  - location,
  - rating (out of 5),
  - total number of reviews,
  - category of the business (e.g. type of cuisine),
  - types of transactions (i.e. takeout, delivery, etc.),
  - phone number, and
  - price in local currency (out of 4).
2. User searches for businesses in a new location in two ways:
  - search for a physical location in the search bar (e.g. "for London, England"), or
  - search based on user's current location.
3. Homepage updates the list of businesses based on the new location, and user clicks on a business in the list to find out more information about it.
4. User is redirected to the specific business page, which contains business details and reviews.

    The left half of the screen contains the details of the business, such as:
    - name,
    - rating (out of 5),
    - category of the business (e.g. type of cuisine),
    - types of transactions (i.e. takeout, delivery, etc.),
    - total number of reviews,
    - location (including Google map and marker), and
    - hours.

    The right half of the screen contains three Yelp reviews of the business, pulled directly from the business' official Yelp page. Each review contains the following:
    - Yelp reviewer avatar image,
    - Yelp reviewer display name,
    - rating (out of 5),
    - date and time the review was created,
    - brief text snippet of the review, and
    - a link to see the rest of the review on Yelp.
4. User clicks on the "See more..." link on the review.
5. User is redirected to the specific review on the official Yelp page for the business.
6. User navigates back to the list of businesses and continues to look at other businesses or locations.

## API Expected Behavior
This project utilized the Yelp Fusion REST API. I specifically accessed the following RESTful endpoints in this application. Below each endpoint is a screenshot of the expected payload and response:
- Base URL: `https://api.yelp.com/v3/businesses`
- GET `/search?latitude={latitude}&longitude={longitude}`
  <img src="./client/src/assets/api-responses/latlong.png" />
- GET `search?location={location}`
  <img src="./client/src/assets/api-responses/location.png" />
- GET `/{businessId}`
  <img src="./client/src/assets/api-responses/business.png" />
- GET `/{businessId}/reviews`
  <img src="./client/src/assets/api-responses/business-reviews.png" />

## Design Decisions
<!-- TODO: Screenshots of the app where distinct design decisions were made should also be included. -->

## Challenges and Reflections
<!-- TODO: challenges and reflections (and engineering journal) -->

## Planning Resources
To plan for this project, the following resources were used:
- [Engineering Journal](#https://docs.google.com/document/d/1CKhBBphHTQQ_YCkehFjm18UuBx3D1x8ip9VwT9hpgXA/edit#heading=h.z9d8z74h3vo)
  - documented daily engineering work including, but not limited to:
    - bugs and/or error messages
    - detailed solution attempts for bugs
    - daily reflections
- [JIRA Kanban Board](#https://cindy-ryoo.atlassian.net/jira/software/projects/BIZ/boards/1)
  - created tickets for implementation features and bugs
- [Figma Wireframes](#https://www.figma.com/file/ADfBEOcOcOMLot7mmQICMN/BizBuzz?node-id=4%3A2)
  - created wireframes of the homepage and specific business page

