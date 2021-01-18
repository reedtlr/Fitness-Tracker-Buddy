# Fitness-Tracker-Buddy
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An app to keep track of your fitness activities
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Install](#install)

## General info
This application uses a noSQL database to store exercise records organized by day over the past week. A statistic page provides details of the duraiton and type of exercises. The form to add a new exercise is divided into cardio and weight exercises. 
	
## Technologies
Project is created with:
* Javascript
* Node.js 
* Express.js
* Mongoose
* MongoDB Atlas

## Install
Download the repository. Make sure you have node.js installed. Open your terminal and run
``` npm install ```
Open your MySQL Workbench and run the 'schema.sql' and the 'seeds'sql' file located in the 'db' folder.
Open the 'connection.js' file in the 'config' folder and change the password. 

To run the application
``` node server.js ```