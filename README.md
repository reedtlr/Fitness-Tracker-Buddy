# Fitness-Tracker-Buddy
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An app to keep track of your fitness activities
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Install](#install)

## General info
This application uses a noSQL MongoDB database to store workout history organized by the amount of exercise per day over the past seven days. A dashboard provides daily comparison of the duration and type of exercise ove the past 7 days of activity. The form allows you to add a cardio or resistance workout.
	
## Technologies
Project is created with:
* Javascript
* Node.js 
* Express.js
* Mongoose
* MongoDB Atlas
* Morgan 

## Install
To install locally, download the repository. Make sure you have node.js installed. Open your terminal and run

``` npm install ``` 

Open your MySQL Workbench and run the 'schema.sql' and the 'seeds'sql' file located in the 'db' folder.

``` npm run seed```

Open the 'connection.js' file in the 'config' folder and change the password. 
To start the application

``` npm start``` 

![Image1 PNG](./public/images/image1.png)
![Image2 PNG](./public/images/image2.png)
![Image3 PNG](./public/images/image3.png)
![Image4 PNG](./public/images/image4.png)