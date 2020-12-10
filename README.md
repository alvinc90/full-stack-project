# [OpenStreetTable](https://fullsteakproject.herokuapp.com/#/)


## Description

OpenStreetTable is a clone of OpenTable where users can make and change reservations, read reviews and look up amazing food photos from many different cities. OpenStreetTable is built using Ruby on Rails and React Redux.  

## Technologies 
* Ruby on Rails - Backend server 
* React-Redux - frontend rendering
* Postgresql - database
* HTML/SCSS - styling 

## Installation
### Pre-requisites
PostgreSQL Database is required for OpenStreetTable to operate correctly

### Setting Up
Please run the following commands:

```
bundle install
npm install
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
```

### Running the app
please run the following commands in separate terminals:

```
rails server
npm run webpack
```


## Features 
### 1. User Authentication
   * Users can Sign Up, Sign in and Sign Out
   * Users can use a demo login to test the site
   * Users can't use certain features without logging in( e.g. making reservation & rating restaurants)
   
### 2. Restaurants and Search 
   * Users can look up restaurants on the splash page or by clicking a city of their choice. 
   
## Upcoming Features 
* Creating a Search Bar to look up restaurants
* Allowing Users to post reviews on any restaurants 
* Favorite/Save functionality that allows users to quickly look up their favorite restaurants. 
* Incorporating Google Maps API 
  
